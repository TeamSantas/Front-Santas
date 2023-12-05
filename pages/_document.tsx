import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import Seo from "../components/common/Seo";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error) {
      throw error;
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Seo />
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `,
            }}
          />
          {/*네이버 검색엔진 등록*/}
          <meta
            name="naver-site-verification"
            content="09946e86a7ef8d94f057b0f634f96410720f566c"
          />
          {/*구글 애드센스(광고) 등록*/}
          <meta
            name="google-adsense-account"
            content="ca-pub-3291465451494000"
          />
          {/*모바일 인풋 클릭시 확대방지*/}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          {/* 카카오 스크립트 */}
          <script
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js"
            integrity="sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEIPFP09ttByAdxd2mEjKuhdqn4"
            crossOrigin="anonymous"
            async
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
