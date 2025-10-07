import accessControl from '../../access-control.json';

export interface User {
  username: string;
  password: string;
  role: string;
}

export interface AuthResult {
  success: boolean;
  user?: Omit<User, 'password'>;
  error?: string;
}

export class AuthService {
  private static readonly STORAGE_KEY = 'suiverify_auth';
  private static readonly MAX_ATTEMPTS_KEY = 'suiverify_login_attempts';

  static authenticate(username: string, password: string): AuthResult {
    // Check login attempts
    const attempts = this.getLoginAttempts();
    if (attempts >= accessControl.config.maxLoginAttempts) {
      return {
        success: false,
        error: 'Too many failed login attempts. Please try again later.'
      };
    }

    // Find user in access control
    const user = accessControl.users.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      this.incrementLoginAttempts();
      return {
        success: false,
        error: 'Invalid username or password'
      };
    }

    // Reset login attempts on successful login
    this.resetLoginAttempts();

    // Store auth session
    const authData = {
      username: user.username,
      role: user.role,
      timestamp: Date.now()
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(authData));
    }

    return {
      success: true,
      user: {
        username: user.username,
        role: user.role
      }
    };
  }

  static isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;

    const authData = localStorage.getItem(this.STORAGE_KEY);
    if (!authData) return false;

    try {
      const parsed = JSON.parse(authData);
      const now = Date.now();
      const sessionAge = now - parsed.timestamp;

      // Check if session has expired
      if (sessionAge > accessControl.config.sessionTimeout) {
        this.logout();
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }

  static getCurrentUser(): Omit<User, 'password'> | null {
    if (typeof window === 'undefined') return null;

    const authData = localStorage.getItem(this.STORAGE_KEY);
    if (!authData) return null;

    try {
      const parsed = JSON.parse(authData);
      return {
        username: parsed.username,
        role: parsed.role
      };
    } catch {
      return null;
    }
  }

  static logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.MAX_ATTEMPTS_KEY);
    }
  }

  static getMainAppUrl(): string {
    return accessControl.config.mainAppUrl;
  }

  private static getLoginAttempts(): number {
    if (typeof window === 'undefined') return 0;

    const attempts = localStorage.getItem(this.MAX_ATTEMPTS_KEY);
    return attempts ? parseInt(attempts, 10) : 0;
  }

  private static incrementLoginAttempts(): void {
    if (typeof window === 'undefined') return;

    const current = this.getLoginAttempts();
    localStorage.setItem(this.MAX_ATTEMPTS_KEY, (current + 1).toString());
  }

  private static resetLoginAttempts(): void {
    if (typeof window === 'undefined') return;

    localStorage.removeItem(this.MAX_ATTEMPTS_KEY);
  }
}
