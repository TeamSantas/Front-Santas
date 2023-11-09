export default function Seo({ title = "두근두근 어드벤트 캘린더 🎁" }) {
  return (
    <>
      <title>{title}</title>
      <meta
        name="description"
        content="크리스마스다! 두근두근 어드벤트 캘린더"
      />

      {/*웹에 설정해줘야하는 og 메타태그*/}
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://merry-christmas.site/" />
      <meta
        property="og:title"
        content="[두어캘] 크리스마스 어드벤트 캘린더 🎁"
      />
      <meta
        property="og:image"
        content="https://merry-christmas.site/assets/image/og-img.png"
      />
      <meta
        property="og:description"
        content="하루에 하나씩 열어보며 기다려요. 🎄"
      />
      <meta property="og:site_name" content="두근두근 어드벤트 캘린더 🎁" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/*// 트위터 카드 타입*/}
      <meta
        property="twitter:card"
        content="하루에 하나씩 열어보는 크리스마스 캘린더 🎄"
      />
      <meta property="twitter:title" content="두근두근 어드벤트 캘린더 🎁" />
      <meta
        property="twitter:description"
        content="하루에 하나씩 열어보는 크리스마스 캘린더 🎄"
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
