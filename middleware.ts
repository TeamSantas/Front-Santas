import { RequestCookies } from "@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";

const handleUpcomingRedirect = (url, cookies) => {
  const isAdmin = cookies.get("admin");

  // 현재 경로가 '/upcoming'과 /adx.txt 이 아닌 경우 리다이렉트
  return (
    url.pathname !== "/upcoming" &&
    process.env.NODE_ENV !== "development" &&
    url.pathname !== "/ads.txt" &&
    url.pathname !== "/robots.txt" &&
    !isAdmin
  );
};

const handleLoginRedirect = (tokenCookie, isRequireLoginPath) => {
  return !tokenCookie && isRequireLoginPath;
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const cookies = new RequestCookies(request.headers);
  const tokenCookie = cookies.get("token");
  const requireLoginPath = ["message"];
  const isRequireLoginPath = requireLoginPath.some((path) =>
    url.pathname.includes(path)
  );

  const upcomingRedirect = handleUpcomingRedirect(url, cookies);
  const loginRedirect = handleLoginRedirect(tokenCookie, isRequireLoginPath);

  if (upcomingRedirect) {
    url.pathname = "/upcoming";
  }
  if (loginRedirect) {
    url.pathname = "/login";
  }

  return upcomingRedirect || loginRedirect
    ? NextResponse.redirect(url) // redirect url이 있는 경우에는 넘김
    : NextResponse.next(); // 다른 경우에는 원래 요청을 유지
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets
     */
    "/((?!api|_next/static|_next/image|favicon.ico|assets).*)",
  ],
};
