import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../component/layout/Layout";
import { AppProps } from "next/app";
import "../public/assets/fonts/font.css";
import PushNotification from "../component/PushNotification";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import * as ga from '../lib/gtag';
import Store from "../store/Store";
import {CookiesProvider} from "react-cookie";

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = url => {
            ga.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

  return (
      <CookiesProvider>
        <Store>
          <Layout>
            <PushNotification />
            <Component {...pageProps} />
          </Layout>
        </Store>
      </CookiesProvider>
  );
}

export default MyApp;
