import { NextRequest, NextResponse } from "next/server";

const handleUpcomingRedirect = (url, req) => {
  const isAdmin = req.cookies.get("admin");
  const targetPaths = ["/upcoming", "/ads.txt", "/robots.txt"];
  const isTargetPath = targetPaths.some((path) => url.pathname.includes(path));

  // 현재 경로가
  // 1. targetPaths가 아니면서
  // 2. 일반 접속자면서 (어드민 x)
  // 3. 운영 환경일 때
  // upcoming으로 리다이렉트
  return !isTargetPath && !isAdmin && process.env.NODE_ENV !== "development";
};

const handleUpcomingToLoginRedirect = (url) => {
  return url.pathname.includes("upcoming");
};

const handleAuthRedirect = (url) => {
  return url.pathname.includes("oauth");
};

const handleEndingRedirect = (url, req) => {
  const endingCookie = req.cookies.get("ending");
  return (
    !endingCookie &&
    (url.pathname === "/" ||
      url.pathname === "/town" ||
      url.pathname === "/message" ||
      url.pathname === "/todays-heart")
  );
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const newToken = url.searchParams.get("token"); // 쿼리에서 가져온 토큰
  const upcomingRedirect = handleUpcomingRedirect(url, req);
  const upcomingToLoginRedirect = handleUpcomingToLoginRedirect(url);
  const oauthRedirect = handleAuthRedirect(url);
  const endingRedirect = handleEndingRedirect(url, req);

  if (upcomingToLoginRedirect) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (oauthRedirect) {
    const returnUrl = req.cookies.get("returnUrl");

    url.pathname = returnUrl ? `/${returnUrl}` : "/";
    url.searchParams.delete("token"); // parameter masking

    // 브라우저 쿠키에 token 세팅
    const response = NextResponse.redirect(url);
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 2); // 2년
    response.cookies.set("token", newToken, {
      expires: expirationDate,
      // 다른 옵션들도 필요한 경우 추가할 수 있습니다.
    });
    return response;
  }

  if (endingRedirect) {
    url.pathname = "/ending";
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // 다른 경우에는 원래 요청을 유지
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
    "/((?!api|_next|static|_next/image|public|favicon.ico|assets|asset_ver2).*)",
  ],
};
