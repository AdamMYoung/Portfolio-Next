import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { DownIndicator } from '../../src/components/common/down-indicator';
import { Layout } from '../../src/components/layout';
import { BlogCard } from '../../src/components/sections/blog-card';
import { Hero, HeroText, HeroTextBlock } from '../../src/components/sections/hero';
import { InfoBlock } from '../../src/components/sections/info-block';
import { getHoverColorFromNumber } from '../../src/utils/color';
import { BlogPost, getContentRepository } from '../../src/utils/content';

type BlogProps = {
    blogPosts: BlogPost[];
};

export const Blog: NextPage<BlogProps> = ({ blogPosts }) => {
    return (
        <Layout>
            <Hero>
                <HeroTextBlock className="text-gradient-blue-purple">
                    <HeroText>Blog</HeroText>
                    <DownIndicator />
                </HeroTextBlock>
            </Hero>
            <InfoBlock>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {blogPosts.map((b, i) => (
                        <div className="" key={b.slug}>
                            <BlogCard blog={b} color={getHoverColorFromNumber(i)} />
                        </div>
                    ))}
                </div>
            </InfoBlock>
        </Layout>
    );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
    const repository = getContentRepository();
    const blogPosts = await repository.getBlogs({ order: '-sys.createdAt' });

    return {
        props: {
            blogPosts,
        },
    };
};
