/* eslint-disable react/jsx-no-target-blank */
import { GetStaticProps, NextPage } from 'next';

import React, { FC } from 'react';
import { DownIndicator } from '../src/components/common/down-indicator';
import { FadeIn } from '../src/components/common/fade-in';
import { FireText } from '../src/components/common/fire-text';
import { Hero, HeroText, HeroTextBlock } from '../src/components/sections/hero';
import { InfoBlock, InfoBlockDescription, InfoBlockTitle } from '../src/components/sections/info-block';
import { Layout } from '../src/components/layout';
import { BlogPost, getContentRepository } from '../src/utils/content';

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
                    I&apos;m a <span className="text-gradient-yellow-green">Software Engineer</span> working at{' '}
                    <a
                        href="https://checkout.com"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gradient-darkblue-blue underline"
                    >
                        Checkout.com
                    </a>
                </HeroText>
                <DownIndicator />
            </HeroTextBlock>
        </Hero>
    );
};

const HomeAboutMe = () => {
    const yearsExperience = new Date().getFullYear() - 2019;

    return (
        <FadeIn>
            <InfoBlock>
                <InfoBlockTitle className="text-gradient-orange-blue">About Me</InfoBlockTitle>
                <InfoBlockDescription>
                    I have {yearsExperience} years experience in{' '}
                    <span className="text-gradient-yellow-green brightness-150">
                        full-stack software design and development
                    </span>
                    , with a huge focus on the web using <span className="text-blue-500">React</span>,{' '}
                    <span className="text-red-500">Next.js</span>, and whatever&apos;s 🔥 at the moment.
                </InfoBlockDescription>
                <InfoBlockDescription>
                    I try to make everything I build <FireText>blazing fast</FireText> and accessible, and I&apos;m
                    always looking for ways to improve 📚. There&apos;s usually a project in-progress, some past
                    examples being{' '}
                    <a className="underline" href="https://blurdle.aydev.uk" target="_blank">
                        Blurdle
                    </a>{' '}
                    or{' '}
                    <a className="underline" href="https://ebay-heuristics-v2.netlify.app/" target="_blank">
                        eBay Heuristics
                    </a>
                    .
                </InfoBlockDescription>
            </InfoBlock>
        </FadeIn>
    );
};

const HomeBlog: FC<{ blogPosts: BlogPost[] }> = ({ blogPosts }) => {
    return (
        <FadeIn>
            <InfoBlock>
                <InfoBlockTitle className="text-gradient-blue-purple pb-2">Blog</InfoBlockTitle>
                <div></div>
            </InfoBlock>
        </FadeIn>
    );
};

const Home: NextPage<HomeProps> = ({ blogPosts }) => {
    return (
        <Layout>
            <HomeHero />
            <HomeAboutMe />
            <HomeBlog blogPosts={blogPosts} />
        </Layout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
    const repository = getContentRepository();
    const blogPosts = repository.getBlogs();

    return {
        props: {
            blogPosts,
        },
    };
};
