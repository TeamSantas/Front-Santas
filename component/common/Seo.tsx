import Head from 'next/head';

export default function Seo({ title }) {
    return (
        <Head>
            <title>{title} | 두근두근 어드벤트 캘린더</title>
            <meta name="description" content="두근두근 어드벤트 캘린더" />
            <link rel="icon" href="/assets/image/favicon.ico" />
        </Head>
    );
}