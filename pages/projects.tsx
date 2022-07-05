import React, { FC } from "react";
import { DownIndicator } from "../src/components/common/down-indicator";

import { Hero, HeroText, HeroTextBlock } from "../src/components/sections/hero";
import { GetStaticProps, NextPage } from "next";
import { getGithubRepository, Repository } from "../src/utils/github";
import { Layout } from "../src/components/layout";
import { InfoBlock } from "../src/components/sections/info-block";
import Link from "next/link";
import { SEO } from "../src/components/meta/SEO";
import { getRepeatableColorFn } from "../src/utils/color";

const collator = new Intl.Collator("en-GB");

type ProjectsProps = {
  projects: Repository[];
};

const ProjectTable: FC<{ projects: Repository[] }> = ({ projects }) => {
  const getColor = getRepeatableColorFn();

  return (
    <InfoBlock className="overflow-hidden overflow-x-auto">
      <table className="table-auto">
        <thead className="border-b text-2xl">
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Description</th>
            <th className="py-2">Languages</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((repo) => (
            <tr key={repo.url} className="border-b py-2">
              <td className="py-2">
                <a
                  className="underline"
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {repo.name}
                </a>
              </td>
              <td className="py-2">{repo.description}</td>
              <td className="py-2">
                <div className="flex flex-wrap gap-2">
                  {repo.languages.sort(collator.compare).map((l) => (
                    <p className={getColor(l)} key={l}>
                      {l}
                    </p>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </InfoBlock>
  );
};

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  return (
    <Layout>
      <SEO
        title="Projects"
        description="All websites, libraries and other bits of code I've developed."
        canonical="/projects/"
      />
      <Hero>
        <HeroTextBlock>
          <Link href="/" passHref>
            <a className="hover:underline">{"< Home"}</a>
          </Link>
          <HeroText className="text-gradient-blue-purple pb-2">
            Projects
          </HeroText>
          <DownIndicator />
        </HeroTextBlock>
      </Hero>
      <ProjectTable projects={projects} />
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const repository = getGithubRepository();
  const projects = await repository.getRepositories();

  return {
    props: {
      projects,
    },
  };
};
