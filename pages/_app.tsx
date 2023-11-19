import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AppProps } from "next/app";
import "../public/assets/fonts/font.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/gtag";
import { CookiesProvider } from "react-cookie";
import Layout from "../components/layout/new/Layout";
import AuthProvider from "../store/contexts/components/auth-provider";

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const getLayout =
    (Component as any).getLayout || ((page) => <Layout> {page} </Layout>);

  return (
    <CookiesProvider>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </CookiesProvider>
  );
}

export default MyApp;
