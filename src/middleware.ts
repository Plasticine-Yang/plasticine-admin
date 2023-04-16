import { NextMiddleware, NextResponse } from 'next/server'

import { COOKIE_AUTH_TOKEN, ROUTES_NEED_AUTH, ROUTE_HOME, ROUTE_LOGIN } from './constants'

export const middleware: NextMiddleware = async (request) => {
  const pathname = request.nextUrl.pathname

  const cookieAuthToken = request.cookies.get(COOKIE_AUTH_TOKEN)

  // 访问需要登陆后才可访问的页面
  for (const routeNeedAuth of ROUTES_NEED_AUTH) {
    if (pathname === routeNeedAuth && !cookieAuthToken) {
      return NextResponse.redirect(new URL(ROUTE_LOGIN, request.url))
    }
  }

  // 登录过了又访问登录页 - 重定向回登录页
  if (pathname === ROUTE_LOGIN && cookieAuthToken) {
    return NextResponse.redirect(new URL(ROUTE_HOME, request.url))
  }

  return NextResponse.next()
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
}
