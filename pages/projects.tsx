import React, { FC } from 'react';
import { DownIndicator } from '../src/components/common/down-indicator';

import { BlogCard } from '../src/components/sections/blog-card';
import { Hero, HeroText, HeroTextBlock } from '../src/components/sections/hero';
import { GetStaticProps, NextPage } from 'next';
import { getGithubRepository, Repository } from '../src/utils/github';
import { Layout } from '../src/components/layout';
import { InfoBlock } from '../src/components/sections/info-block';
import Link from 'next/link';
import { SEO } from '../src/components/meta/SEO';

type ProjectsProps = {
    projects: Repository[];
};

const ProjectTable: FC<{ projects: Repository[] }> = ({ projects }) => {
    return (
        <InfoBlock>
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
                                <a className="underline" href={repo.url} target="_blank" rel="noreferrer">
                                    {repo.name}
                                </a>
                            </td>
                            <td className="py-2">{repo.description}</td>
                            <td className="py-2">
                                <div className="flex flex-wrap gap-2">
                                    {repo.languages.map((l) => (
                                        <p key={l}>{l}</p>
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
                        <a className="hover:underline">{'< Home'}</a>
                    </Link>
                    <HeroText className="text-gradient-blue-purple pb-2">Projects</HeroText>
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
