import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useEffect } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import * as mdx from '@mdx-js/react';
import Link from 'next/link';

import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/github-dark.css';
import hljsDefineGraphQL from 'highlightjs-graphql';

import { Layout } from '../../src/components/layout';
import { Hero, HeroText, HeroTextBlock } from '../../src/components/sections/hero';
import { InfoBlock, InfoBlockTitle } from '../../src/components/sections/info-block';
import { BlogPost, getContentRepository } from '../../src/utils/content';
import { dateToLongDate } from '../../src/utils/date';

import { BlogCard } from '../../src/components/sections/blog-card';
import { getHoverColorFromNumber } from '../../src/utils/color';
import Image from 'next/image';

hljsDefineGraphQL(hljs);
hljs.configure({
    ignoreUnescapedHTML: true,
});

type MDXComponents = React.ComponentProps<typeof mdx.MDXProvider>['components'];

const components: MDXComponents = {
    pre: (props) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            hljs.initHighlighting();
        }, []);

        return <pre className="no-prose bg-inherit rounded code-box" {...props} />;
    },
};

export const BlogPostPage: NextPage<{
    blogPost: BlogPost;
    additionalBlogPosts: BlogPost[];
    markdown: MDXRemoteSerializeResult<Record<string, unknown>>;
}> = ({ blogPost, markdown, additionalBlogPosts }) => {
    const { title, summary, updatedAt, createdAt } = blogPost;

    const createdAtText = dateToLongDate(createdAt);
    const updatedAtText = dateToLongDate(updatedAt);

    return (
        <Layout>
            <Hero>
                <HeroTextBlock>
                    <Link href="/" passHref>
                        <a className="hover:underline">{'< Home'}</a>
                    </Link>
                    <HeroText>
                        <span className="text-gradient-blue-purple">{title}</span>
                    </HeroText>
                    <p className="leading-12 text-2xl">{summary}</p>
                    <p className="leading-12 text-gray-400 text-md">
                        {' '}
                        {createdAtText} {createdAtText !== updatedAtText && `(Updated on ` + updatedAtText + ')'}
                    </p>
                </HeroTextBlock>
            </Hero>
            <InfoBlock>
                <div className="max-w-3xl prose prose-zinc text-white prose-headings:text-gradient-yellow-green prose-code:text-red-500 prose-a:text-white prose-strong:text-white">
                    <MDXRemote {...markdown} components={components} />
                </div>
            </InfoBlock>

            <InfoBlock>
                <InfoBlockTitle className="text-gradient-blue-purple pb-2">Related Posts</InfoBlockTitle>
                <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {additionalBlogPosts.map((b, i) => (
                        <BlogCard key={b.slug} blog={b} color={getHoverColorFromNumber(i)} />
                    ))}
                </div>
            </InfoBlock>
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
    const recentBlogPosts = await content.getBlogs({ limit: 4, order: 'sys.createdAt' });
    const markdown = await serialize(blogPost.copy);

    return {
        props: { blogPost, markdown, additionalBlogPosts: recentBlogPosts.filter((i) => i.slug !== blogPost.slug) },
    };
};

export default BlogPostPage;
