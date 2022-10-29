import Head from "next/head";
import { FCC } from "../../types";

type SEOProps = {
    title: string;
    description: string;
    canonical: string;
    imageUrl?: string;
    imageAlt?: string;
};

const fixedEncodeURIComponent = (str: string) => {
    return encodeURIComponent(str).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
};

export const SEO: FCC<SEOProps> = ({ children, title, description, canonical, imageUrl, imageAlt }) => {
    return (
        <Head>
            <title>{`AYDev | ${title}`}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`https://aydev.uk${canonical}`} />

            <meta property="og:title" content={title} />
            <meta property="og:site_name" content="AYDev" />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:description" content={description} />
            <meta
                property="og:image"
                content={`https://aydev.uk/api/og?name=${fixedEncodeURIComponent(title)}${
                    imageUrl ? `&imageUrl=${fixedEncodeURIComponent(imageUrl)}` : ""
                }`}
            />
            {imageAlt && <meta property="og:image:alt" content={imageAlt} />}

            <meta name="theme-color" content="#000" />

            {children}
        </Head>
    );
};
