import { NextPage } from 'next';

import React from 'react';
import { DownIndicator } from '../src/components/common/down-indicator';
import { Hero, HeroText, HeroTextBlock } from '../src/components/common/hero';
import { Layout } from '../src/components/layout';

import profile from '../src/images/me.jpg';

const Home: NextPage = () => {
    return (
        <Layout>
            <Hero>
                <HeroTextBlock>
                    <HeroText>
                        Hi, I'm <span className="text-gradient-blue-purple">Adam Young</span>!
                    </HeroText>
                    <HeroText className="leading-12 ">
                        I'm a <span className="text-gradient-yellow-green">Software Engineer</span> working at{' '}
                        <a
                            href="https://checkout.com"
                            rel="noreferrer"
                            target="_blank"
                            className="text-gradient-darkblue-blue"
                        >
                            Checkout.com
                        </a>
                    </HeroText>
                    <DownIndicator />
                </HeroTextBlock>
            </Hero>
        </Layout>
    );
};

export default Home;
