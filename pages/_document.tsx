import { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document: NextPage = () => {
    return (
        <Html>
            <Head />
            <body>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-WGNHV27GTK" strategy="afterInteractive" />
                <Script
                    id="gtag"
                    dangerouslySetInnerHTML={{
                        __html: " window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-WGNHV27GTK');",
                    }}
                    strategy="afterInteractive"
                />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
