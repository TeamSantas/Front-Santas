import Head from "next/head";

export default function Seo() {
  return (
    <Head>
      <title>{"두근두근 어드벤트 캘린더🎁"}</title>
      <meta
        name="description"
        content="크리스마스다! 두근두근 어드벤트 캘린더"
      />
        {/*네이버 검색엔진 등록*/}
        <meta name="naver-site-verification" content="09946e86a7ef8d94f057b0f634f96410720f566c" />
      {/*웹에 설정해줘야하는 og 메타태그*/}
      <link rel="icon" href="/assets/image/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pitapat-adventcalendar.site/title" />
      <meta property="og:title" content="다함께 크리스마스 즐기기✨" />
      <meta
        property="og:image"
        content="https://pitapat-adventcalendar.site/assets/image/character/face_heart.png"
      />
      <meta
        property="og:description"
        content="크리스마스다! 두근두근 어드벤트 캘린더"
      />
      <meta property="og:site_name" content="두근두근 어드벤트 캘린더🎁" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/*// 트위터 카드 타입*/}
      <meta
          property="twitter:card"
        content="크리스마스다! 두근두근 어드벤트 캘린더"
      />
      <meta property="twitter:title" content="두근두근 어드벤트 캘린더🎁" />
      <meta property="twitter:description" content="다함께 크리스마스 즐기기✨" />
      <meta
          property="twitter:image"
        content="https://pitapat-adventcalendar.site/assets/image/character/face_heart.png"
      />
      <meta property="twitter:creator" content="@teamsantaz_official" />
      <meta
          property="twitter:site"
        content="https://pitapat-adventcalendar.site/title"
      />
    </Head>
  );
}
