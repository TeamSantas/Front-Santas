import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../component/layout/Layout";
import {AppProps} from "next/app";
import "../public/fonts/style.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp
