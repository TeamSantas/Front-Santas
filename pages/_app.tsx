import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AppProps } from "next/app";
import "../public/assets/fonts/font.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { CookiesProvider } from "react-cookie";
import Layout from "../components/layout/new/Layout";
import AuthProvider from "../store/contexts/components/auth-provider";
import { measurePageView } from "../lib/gtag";

declare global {
  interface Window {
    Kakao: any;
    dataLayer: Record<string, any>[];
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
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
  }, [router.asPath]);

  const getLayout =
    (Component as any).getLayout || ((page) => <Layout> {page} </Layout>);

  return (
    <CookiesProvider>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </CookiesProvider>
  );
}

export default MyApp;
