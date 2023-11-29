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
import ReactHowler from "react-howler";
import { useAtom } from "jotai";
import {
  loginUserDataAtom,
  sidebarBgmAtom,
  sidebarNotificationAtom,
} from "../store/globalState";
import { useAuthContext } from "../store/contexts/components/hooks";

declare global {
  interface Window {
    Kakao: any;
    dataLayer: Record<string, any>[];
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [storeUserData] = useAtom(loginUserDataAtom);
  const [bgmOn, setBgmOn] = useAtom(sidebarBgmAtom);
  const [, setNotificationOn] = useAtom(sidebarNotificationAtom);

  const initialSetting = () => {
    try {
      // TODO: 이 때 storeUserData 잘 들어오나 체크해봐야 함
      setBgmOn(storeUserData?.setting.bgm ? true : false);
      setNotificationOn(storeUserData?.setting.isAlert ? true : false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initialSetting();
  }, []);

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
      <ReactHowler src="./bgm.mp3" playing={bgmOn} loop={true} />
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </CookiesProvider>
  );
}

export default MyApp;
