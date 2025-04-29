import { auth } from "@/lib/auth";
import { getToken } from "next-auth/jwt";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default auth(async function middleware(req) {
  const token = await getToken({req: req, secret: process.env.AUTH_SECRET});
  // console.log(token);

  const isAuth = !!token;
  const isAuthPage = 
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register");

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return;
  }

  if (!isAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
);

export const config = {
  matcher: ['/dashboard/:path*', '/editor/:path', '/login', '/register']
}