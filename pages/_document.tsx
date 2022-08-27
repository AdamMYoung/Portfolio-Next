import { NextPage } from "next";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document: NextPage = () => {
    return (
        <Html>
            <Head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9732665435466396"
                    crossOrigin="anonymous"
                ></script>
            </Head>
            <body>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-WGNHV27GTK" strategy="beforeInteractive" />

                <Script id="google-analytics" strategy="beforeInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){window.dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', 'G-WGNHV27GTK');
                    `}
                </Script>

                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
