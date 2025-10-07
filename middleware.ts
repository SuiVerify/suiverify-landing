// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const MAIN_APP_URL = 'https://suiverify-main.vercel.app';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;
  
  // List of paths that should be proxied to the main app
  const proxyPaths = ['/auth', '/dashboard', '/kyc', '/admin', '/adminLogin'];
  const isApiRoute = pathname.startsWith('/api/');
  
  // Check if the current path should be proxied
  if (proxyPaths.includes(pathname) || isApiRoute) {
    // Create the destination URL
    const destinationUrl = new URL(pathname + url.search, MAIN_APP_URL);
    
    // Fetch from the main app
    return NextResponse.rewrite(destinationUrl);
  }
  
  // Continue with the request if not a proxy path
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/auth',
    '/dashboard',
    '/kyc',
    '/admin',
    '/adminLogin',
    '/api/:path*'
  ]
};
