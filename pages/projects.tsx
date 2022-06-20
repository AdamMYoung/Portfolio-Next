import React from 'react';
import { DownIndicator } from '../src/components/common/down-indicator';
import { Layout } from '../src/components/layout';
import { Hero, HeroText, HeroTextBlock } from '../src/components/sections/hero';

const Projects = () => {
    return (
        <Layout>
            <Hero>
                <HeroTextBlock>
                    <HeroText className="text-gradient-blue-purple pb-2">Projects</HeroText>
                    <DownIndicator />
                </HeroTextBlock>
            </Hero>
        </Layout>
    );
};

export default Projects;
