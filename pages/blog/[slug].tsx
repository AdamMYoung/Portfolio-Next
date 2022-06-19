import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { FC } from 'react';
import { Layout } from '../../src/components/layout';
import { Hero, HeroText, HeroTextBlock } from '../../src/components/sections/hero';
import { BlogPost, getContentRepository } from '../../src/utils/content';

export const BlogPostPage: NextPage<{ blogPost: BlogPost }> = ({ blogPost }) => {
    const { title, summary } = blogPost;

    return (
        <Layout>
            <Hero>
                <HeroTextBlock>
                    <HeroText>
                        <span className="text-gradient-blue-purple">{title}</span>
                    </HeroText>
                    <p className="leading-12 text-2xl">{summary}</p>
                </HeroTextBlock>
            </Hero>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const content = getContentRepository();
    const blogPosts = await content.getBlogs();

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

    const blogPost = await content.getBlog(params.slug);

    return { props: { blogPost } };
};

export default BlogPostPage;
