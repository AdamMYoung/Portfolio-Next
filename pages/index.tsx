/* eslint-disable react/jsx-no-target-blank */
import { GetStaticProps, NextPage } from "next";

import React, { FC } from "react";
import { DownIndicator } from "../src/components/common/down-indicator";
import { FadeIn } from "../src/components/common/fade-in";
import { FireText } from "../src/components/common/fire-text";
import { Hero, HeroText, HeroTextBlock } from "../src/components/sections/hero";
import {
    InfoBlock,
    InfoBlockDescription,
    InfoBlockLinkTitle,
    InfoBlockTitle,
} from "../src/components/sections/info-block";
import { Layout } from "../src/components/layout";
import { BlogPost, getContentRepository } from "../src/utils/content";
import { BlogCard } from "../src/components/sections/blog-card";
import { getHoverColorFromNumber } from "../src/utils/color";
import { SEO } from "../src/components/meta/SEO";
import Link from "next/link";

type HomeProps = {
    blogPosts: BlogPost[];
};

const HomeHero = () => {
    return (
        <Hero>
            <HeroTextBlock>
                <HeroText>
                    Hi, I&apos;m <span className="text-gradient-blue-purple">Adam Young</span>!
                </HeroText>
                <HeroText className="leading-12 ">
                    I&apos;m a <a href="https://www.checkout.com" target="_blank" rel="noreferrer" className="text-gradient-yellow-green transition-all hover:brightness-200">Software Engineer</a>, <Link href="/photography" passHref><a className="text-gradient-orange-blue transition-all hover:brightness-200">Photographer</a></Link>, and <Link href="/blog" passHref><a className="text-gradient-purple-blue transition-all hover:brightness-200">Occasional Blogger</a></Link>.
                </HeroText>
                <DownIndicator />
            </HeroTextBlock>
        </Hero>
    );
};

const HomeBlog: FC<{ blogPosts: BlogPost[] }> = ({ blogPosts }) => {
    return (
        <FadeIn>
            <InfoBlock>
                <InfoBlockLinkTitle href="/blog" className="pb-2">
                    <span className="text-gradient-blue-purple  transition-all hover:brightness-200">Tech Blog</span>
                </InfoBlockLinkTitle>
                <div className="snap-x flex mt-8 md:snap-none overflow-hidden overflow-x-auto md:overflow-auto md:overflow-x-auto md:grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {blogPosts.map((b, i) => (
                        <div className="min-w-75vw md:min-w-0 md:w-auto" key={b.slug}>
                            <BlogCard blog={b} color={getHoverColorFromNumber(i)} />
                        </div>
                    ))}
                </div>
            </InfoBlock>
        </FadeIn>
    );
};

const Home: NextPage<HomeProps> = ({ blogPosts }) => {
    return (
        <Layout>
            <SEO
                title="Home"
                description="Hi, I'm Adam Young, a Software Engineer based in County Durham, currently working at Checkout.com. Here, you'll find articles about software development, my interests, and the projects I've currently got on the go."
                canonical="/"
            />
            <HomeHero />
            <HomeBlog blogPosts={blogPosts} />
        </Layout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const repository = getContentRepository();
    const blogPosts = await repository.getBlogs({
        limit: 6,
        order: "-sys.createdAt",
    });

    return {
        props: {
            blogPosts,
        },
    };
};
