import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../component/layout/Layout";
import { AppProps } from "next/app";
import "../public/assets/fonts/font.css";
import PushNotification from "../component/PushNotification";
import {useEffect} from "react";
import {useRouter} from "next/router";
import * as ga from '../lib/gtag';
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
    <Layout>
      <PushNotification />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
