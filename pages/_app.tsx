import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout/Layout";
import { AppProps } from "next/app";
import "../public/assets/fonts/font.css";
import PushNotification from "../components/PushNotification";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/gtag";
import Store from "../store/Store";
import { CookiesProvider } from "react-cookie";
import { getCookie, setCookie } from "cookies-next";

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (!getCookie("noticeRead")) {
      setCookie("noticeRead", false);
    }
  }, []);

  if (!hasMounted) {
    return null;
  }

  const getLayout =
    (Component as any).getLayout || ((page) => <Layout> {page} </Layout>);

  return (
    <CookiesProvider>
      <Store>
        <PushNotification />
        {getLayout(<Component {...pageProps} />)}
      </Store>
    </CookiesProvider>
  );
}

export default MyApp;
