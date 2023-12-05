import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AppProps } from "next/app";
import "../public/assets/fonts/font.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CookiesProvider } from "react-cookie";
import Layout from "../components/layout/new/Layout";
import AuthProvider from "../store/contexts/components/auth-provider";
import { measurePageView } from "../lib/gtag";
import ReactHowler from "react-howler";
import { useAtom } from "jotai";
import { sidebarBgmAtom } from "../store/globalState";
import { Loading } from "../components/layout/new/loading-cute";

declare global {
  interface Window {
    Kakao: any;
    dataLayer: Record<string, any>[];
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [bgmOn] = useAtom(sidebarBgmAtom);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.Kakao.isInitialized()) {
      window.Kakao.cleanup();
    }
    window.Kakao.init("3a75ee9ed0b21018376f7d7e2ee8ab40");
  }, []);

  useEffect(() => {
    // GA --------------------------------------------------
    if (window.dataLayer) {
      window.dataLayer.push({ event: "optimize.activate" });
      window.dataLayer.push({
        event: "virtualPageview",
        pageUrl: window.location.href,
        pageTitle: document.title,
      });
    }

    measurePageView({
      page_title: document.title,
      page_location: window.location.href,
      page_referrer: document.referrer,
    });
    // ------------------------------------------------------

    // 라우터 변경 감지 --------------------------------------------------
    // 라우팅 시작 시 로딩 상태를 true로 설정
    const handleStart = () => setLoading(true);
    // 라우팅 완료 시 로딩 상태를 false로 설정
    const handleComplete = () => setLoading(false);

    // 라우터 이벤트에 핸들러 연결
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // 컴포넌트 언마운트 시, 라우터 이벤트 핸들러 제거
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const getLayout =
    (Component as any).getLayout || ((page) => <Layout> {page} </Layout>);

  return (
    <CookiesProvider>
      <ReactHowler src="./bgm.mp3" playing={bgmOn} loop={true} />
      <AuthProvider>
        {getLayout(loading ? <Loading /> : <Component {...pageProps} />)}
      </AuthProvider>
    </CookiesProvider>
  );
}

export default MyApp;
