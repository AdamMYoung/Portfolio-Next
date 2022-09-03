import React, { FC } from "react";
import { DownIndicator } from "../../src/components/common/down-indicator";

import { Hero, HeroText, HeroTextBlock } from "../../src/components/sections/hero";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Layout } from "../../src/components/layout";
import { InfoBlock } from "../../src/components/sections/info-block";
import Link from "next/link";
import { SEO } from "../../src/components/meta/SEO";
import { BiDownload } from "react-icons/bi";

import { AlbumDetail, getContentRepository } from "../../src/utils/content";
import Image from "next/image";

type PhotographyProps = {
    album: AlbumDetail;
};

const ImageList: FC<{ album: AlbumDetail }> = ({ album }) => {
    const handleDownloadClick = async (url: string) => {
        const data = await fetch(url);
        const dataBlob = await data.blob();
        const dataUrl = URL.createObjectURL(dataBlob);

        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "image.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <InfoBlock className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2">
            {album.imageUrls.map((image) => (
                <div key={image.url}>
                    <div className="relative w-full">
                        <Image
                            src={image.url}
                            alt=""
                            className="rounded"
                            layout="responsive"
                            width={image.width}
                            height={image.height}
                        />
                        <div className="absolute bottom-12 md:bottom-0 right-0">
                            <button
                                className="absolute md:bottom-4 right-4 translate-all hover:shadow-md hover:bg-slate-200 bg-white rounded p-1"
                                onClick={() => handleDownloadClick(image.url)}
                            >
                                <BiDownload color="black" className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </InfoBlock>
    );
};

const AlbumContent: NextPage<PhotographyProps> = ({ album }) => {
    return (
        <Layout>
            <SEO
                title={`Photography - ${album.title}`}
                description={`Album of ${album.title} photography I've taken`}
                canonical={`/photography/${album.slug}`}
            />
            <Hero>
                <HeroTextBlock>
                    <Link href="/photography" passHref>
                        <a className="hover:underline">{"< Back"}</a>
                    </Link>
                    <HeroText className="text-gradient-blue-purple pb-2">Album - {album.title}</HeroText>
                    <DownIndicator />
                </HeroTextBlock>
            </Hero>
            <ImageList album={album} />
        </Layout>
    );
};

export default AlbumContent;

export const getStaticPaths: GetStaticPaths = async () => {
    const content = getContentRepository();
    const blogPosts = await content.getAlbums();

    const paths = blogPosts.map((b) => ({ params: { slug: b.slug } }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const content = getContentRepository();

    if (!params?.slug) {
        return { notFound: true };
    }

    if (Array.isArray(params.slug)) {
        throw new Error();
    }

    const album = await content.getAlbum(params.slug);

    return {
        props: {
            album,
        },
    };
};
