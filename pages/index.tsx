/* eslint-disable react/jsx-no-target-blank */
import { NextPage } from 'next';

import React from 'react';
import { DownIndicator } from '../src/components/common/down-indicator';
import { FireText } from '../src/components/common/fire-text';
import { Hero, HeroText, HeroTextBlock } from '../src/components/common/hero';
import { IconisedText } from '../src/components/common/iconised-text';
import { InfoBlock, InfoBlockDescription, InfoBlockTitle } from '../src/components/common/info-block';
import { Layout } from '../src/components/layout';

import spiderWeb from '../src/images/spider-web.svg';

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
        <InfoBlock>
            <InfoBlockTitle className="text-gradient-orange-blue">About Me</InfoBlockTitle>
            <InfoBlockDescription>
                I have {yearsExperience} years experience in{' '}
                <span className="text-gradient-yellow-green brightness-150">software design and development</span>{' '}
                across the full stack, with a huge focus on the{' '}
                <IconisedText className="" src={spiderWeb}>
                    web
                </IconisedText>{' '}
                using React. I try to make everything I build <FireText>blazing fast</FireText> and accessible, and
                I&apos;m always looking for ways to improve.
            </InfoBlockDescription>
            <InfoBlockDescription>
                There&apos;s usually a project in-progress, with some past examples being{' '}
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
    );
};

const Home: NextPage = () => {
    return (
        <Layout>
            <HomeHero />
            <HomeAboutMe />
        </Layout>
    );
};

export default Home;
