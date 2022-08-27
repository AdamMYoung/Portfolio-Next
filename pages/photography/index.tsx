import React, { FC } from "react";
import { DownIndicator } from "../../src/components/common/down-indicator";

import { Hero, HeroText, HeroTextBlock } from "../../src/components/sections/hero";
import { GetStaticProps, NextPage } from "next";

import { Layout } from "../../src/components/layout";
import { InfoBlock } from "../../src/components/sections/info-block";
import Link from "next/link";
import { SEO } from "../../src/components/meta/SEO";

import { Album, getContentRepository } from "../../src/utils/content";
import Image from "next/image";

type PhotographyProps = {
    albums: Album[];
};

const AlbumList: FC<{ albums: Album[] }> = ({ albums }) => {
    return (
        <InfoBlock className="grid gap-1 ">
            <div className="max-w-3xl">
                {albums.map((a) => (
                    <article key={a.slug} className="relative w-full">
                        <Image src={a.coverUrl} alt={a.title} objectFit="cover" height={600} width={800} />
                        <a
                            href={`/photography/${a.slug}`}
                            className="absolute top-0 bottom-0 left-0 right-0 transition-all bg-black opacity-30 hover:opacity-40 z-10"
                        />
                        <div className="absolute p-8 grid gap-2 text-white bottom-0 z-20 pointer-events-none">
                            <h2 className="text-2xl md:text-4xl">{a.title}</h2>
                            <p className="md:text-lg">
                                {a.count} image{a.count > 1 && "s"}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </InfoBlock>
    );
};

const Photography: NextPage<PhotographyProps> = ({ albums }) => {
    return (
        <Layout>
            <SEO title="Photography" description="Albums of the various photos I've taken" canonical="/photography/" />
            <Hero>
                <HeroTextBlock>
                    <Link href="/" passHref>
                        <a className="hover:underline">{"< Home"}</a>
                    </Link>
                    <HeroText className="text-gradient-blue-purple pb-2">Photography</HeroText>
                    <DownIndicator />
                </HeroTextBlock>
            </Hero>
            <AlbumList albums={albums} />
        </Layout>
    );
};

export default Photography;

export const getStaticProps: GetStaticProps = async () => {
    const repository = getContentRepository();
    const albums = await repository.getAlbums();

    return {
        props: {
            albums,
        },
    };
};
