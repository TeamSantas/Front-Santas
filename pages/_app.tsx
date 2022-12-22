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
import Seo from "../component/common/Seo";
import {DefaultSeo, NextSeo} from "next-seo";
import {SeoNext} from "../component/common/SeoNext";
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
        const handleRouteChange = url => {
            ga.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    if (!hasMounted) {
        return null;
    }
  return (
      <CookiesProvider>
          <DefaultSeo {...SeoNext}/>
          <NextSeo
              openGraph={{
                  type: 'website',
                  url: 'https://pitapat-adventcalendar.site/title',
                  title: '두근두근 어드벤트 캘린더🎁',
                  description: '크리스마스다! 두근두근 어드벤트 캘린더',
                  images: [
                      {
                          url: "https://pitapat-adventcalendar.site/assets/image/onboarding/maintitle.png",
                          width: 280,
                          height: 280,
                          alt: "Og Image Alt 1"
                      },
                      {
                          url: 'https://pitapat-adventcalendar.site/assets/image/character/face_heart.png',
                          width: 600,
                          height: 600,
                          alt: 'Og Image Alt 2',
                      },
                  ],
              }}
          />
        <Store>
          <Layout>
            <PushNotification />
              <DefaultSeo {...SeoNext}/>
            <Component {...pageProps} />
          </Layout>
        </Store>
      </CookiesProvider>
  );
}

export default MyApp;
