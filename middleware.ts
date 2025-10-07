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
  const isStaticAsset = pathname.startsWith('/_next/static/') || 
                       pathname.startsWith('/_next/image/') ||
                       pathname.startsWith('/favicon.ico') ||
                       pathname.startsWith('/logoo.png') ||
                       pathname.startsWith('/images/');
  
  // Check if the current path should be proxied
  if (proxyPaths.includes(pathname) || isApiRoute) {
    // Create the destination URL
    const destinationUrl = new URL(pathname + url.search, MAIN_APP_URL);
    
    // Fetch from the main app
    return NextResponse.rewrite(destinationUrl);
  }
  
  // Handle static assets - check if they exist in landing app first, then proxy to main app
  if (isStaticAsset) {
    // For auth page assets, proxy to main app
    const referer = request.headers.get('referer');
    if (referer && (referer.includes('/auth') || referer.includes('/dashboard') || referer.includes('/kyc') || referer.includes('/admin'))) {
      const destinationUrl = new URL(pathname + url.search, MAIN_APP_URL);
      return NextResponse.rewrite(destinationUrl);
    }
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
    '/api/:path*',
    '/_next/static/:path*',
    '/_next/image/:path*',
    '/favicon.ico',
    '/logoo.png',
    '/images/:path*'
  ]
};
