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

type HomeProps = {
  blogPosts: BlogPost[];
};

const HomeHero = () => {
  return (
    <Hero>
      <HeroTextBlock>
        <HeroText>
          Hi, I&apos;m{" "}
          <span className="text-gradient-blue-purple">Adam Young</span>!
        </HeroText>
        <HeroText className="leading-12 ">
          I&apos;m a{" "}
          <span className="text-gradient-yellow-green">Software Engineer</span>{" "}
          working at{" "}
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
        <InfoBlockTitle className="text-gradient-orange-blue">
          About Me
        </InfoBlockTitle>
        <InfoBlockDescription>
          I have {yearsExperience} years experience in{" "}
          <span className="text-gradient-yellow-green brightness-150">
            full-stack software design and development
          </span>
          , with a huge focus on the web using{" "}
          <span className="text-blue-500">React</span>,{" "}
          <span className="text-red-500">Next.js</span>, and whatever&apos;s 🔥
          at the moment.
        </InfoBlockDescription>
        <InfoBlockDescription>
          I try to make everything I build <FireText>blazing fast</FireText> and
          accessible, and I&apos;m always looking for ways to improve 📚.
          There&apos;s usually a project in-progress, some past examples being{" "}
          <a
            className="underline"
            href="https://blurdle.aydev.uk"
            target="_blank"
          >
            Blurdle
          </a>{" "}
          or{" "}
          <a
            className="underline"
            href="https://ebay-heuristics-v2.netlify.app/"
            target="_blank"
          >
            eBay Heuristics
          </a>
          .
        </InfoBlockDescription>
        <InfoBlockDescription>
          I also do photography in my spare time; a collection of my work can be
          found{" "}
          <a className="underline" href="/photography">
            here
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
        <InfoBlockLinkTitle
          href="/blog"
          className="text-gradient-blue-purple pb-2"
        >
          Tech Blog
        </InfoBlockLinkTitle>
        <div className="snap-x flex md:snap-none overflow-hidden overflow-x-auto md:overflow-auto md:overflow-x-auto md:grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
      <HomeAboutMe />

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
