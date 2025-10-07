import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow access to public assets and API routes
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/favicon.ico') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // For the root path, always show the landing page
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }

  // For any other paths, redirect to root (landing page)
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
