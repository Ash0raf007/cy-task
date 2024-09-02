import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req) {
  const isAuth = req.cookies.get("token");
  const userId = req.cookies.get("userId");
  const url = req.url;
  

  if ((!isAuth || !userId) && (url.includes("/dashboard") )) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  const requestHeaders = new Headers(req.headers)

  // Add new request headers
  requestHeaders.set('Authorization', `Bearer ${isAuth}`)

  if (
    isAuth && userId &&
    (url.includes("/login") ) 
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
}