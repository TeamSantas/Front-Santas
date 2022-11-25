import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../component/layout/Layout";
import { AppProps } from "next/app";
import "../public/assets/fonts/font.css";
import PushNotification from "../component/PushNotification";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <PushNotification />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
