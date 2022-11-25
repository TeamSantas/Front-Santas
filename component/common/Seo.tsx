import Head from 'next/head';

export default function Seo({ title }) {
    return (
        <Head>
            <title>{title} | 두근두근 어드벤트 캘린더🎁</title>
            <meta name="description" content="크리스마스다! 두근두근 어드벤트 캘린더" />
            {/*웹에 설정해줘야하는 og 메타태그*/}
            <link rel="icon" href="/assets/image/favicon.ico" />
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="httpㄴ://pitapat-adventcalendar.site/"/>
            <meta property="og:title" content="다함께 크리스마스 즐기기✨"/>
            <meta property="og:image" content="https://pitapat-adventcalendar.site/assets/image/character/face_heart.png"/>
            <meta property="og:description" content="크리스마스다! 두근두근 어드벤트 캘린더"/>
            <meta property="og:site_name" content="두근두근 어드벤트 캘린더🎁"/>
            <meta property="og:locale" content="ko_KR"/>
            {/*<다음의 태그는 필수는 아니지만, 포함하는 것을 추천함*/}
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
        </Head>
    );
}
