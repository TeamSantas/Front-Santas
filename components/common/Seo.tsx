export default function Seo({ title = "두근두근 어드벤트 캘린더" }) {
  return (
    <>
      <title>{title}</title>
      <meta
        name="description"
        content="하루에 하나씩 열어보며 크리스마스를 기다려요. 🎄"
      />

      {/* favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/android-chrome-512x512.png"
      />

      {/*웹에 설정해줘야하는 og 메타태그*/}
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://merry-christmas.site/" />
      <meta property="og:title" content="두근두근 어드벤트 캘린더" />
      <meta
        property="og:image"
        content="https://merry-christmas.site/assets/image/og-img.png"
      />
      <meta
        property="og:description"
        content="하루에 하나씩 열어보며 크리스마스를 기다려요. 🎄"
      />
      <meta property="og:site_name" content="두근두근 어드벤트 캘린더" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/*// 트위터 카드 타입*/}
      <meta
        property="twitter:card"
        content="하루에 하나씩 열어보며 크리스마스를 기다려요. 🎄"
      />
      <meta property="twitter:title" content="두근두근 어드벤트 캘린더" />
      <meta
        property="twitter:description"
        content="하루에 하나씩 열어보며 크리스마스를 기다려요. 🎄"
      />
      <meta
        property="twitter:image"
        content="https://merry-christmas.site/assets/image/og-img.png"
      />
      <meta property="twitter:creator" content="@teamsantaz_official" />
      <meta
        property="twitter:site"
        content="https://merry-christmas.site/title"
      />
    </>
  );
}
