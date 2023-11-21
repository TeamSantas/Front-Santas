import { NextRequest, NextResponse } from "next/server";

const handleUpcomingRedirect = (url, isAdmin) => {
  return url.pathname !== "/upcoming" &&
    process.env.NODE_ENV !== "development" &&
    url.pathname !== "/ads.txt" &&
    url.pathname !== "/robots.txt" &&
    !isAdmin
    ? "/upcoming"
    : false;
};

const handleLoginRedirect = (isLoggedIn, isRequireLoginPath) => {
  return !isLoggedIn && isRequireLoginPath ? "/login" : false;
};

export function middleware(req: NextRequest) {
  // 현재 경로가 '/upcoming'과 /adx.txt 이 아닌 경우 리다이렉트
  const url = req.nextUrl;
  const isAdmin = req.cookies.get("admin");
  const isLoggedIn = req.cookies.get("token");
  const requireLoginPath = ["message"];
  const isRequireLoginPath = requireLoginPath.some((path) =>
    url.pathname.includes(path)
  );

  const upcomingRedirectUrl = handleUpcomingRedirect(url, isAdmin);
  const loginRedirectUrl = handleLoginRedirect(isLoggedIn, isRequireLoginPath);

  if (upcomingRedirectUrl) {
    url.pathname = "/upcoming";
  }
  if (loginRedirectUrl) {
    url.pathname = "/login";
  }

  return upcomingRedirectUrl || loginRedirectUrl
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
