import { Octokit } from "@octokit/rest";

export type Repository = {
    name: string;
    description: string;
    languages: string[];
    updatedAt: string;
    url: string;
};

export interface IGithubRepository {
    getRepositories(): Promise<Repository[]>;
}

const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
});

const OWNER = "AdamMYoung";

class GithubRepository implements IGithubRepository {
    async getRepositories(): Promise<Repository[]> {
        const repos = await octokit.rest.repos.listForAuthenticatedUser({
            username: OWNER,
            type: "public",
        });

        if (!repos.data) {
            return [];
        }

        return new Promise((resolve) => {
            const repositories: Repository[] = [];

            repos.data.forEach(async (r) => {
                const languages = await octokit.rest.repos.listLanguages({
                    owner: OWNER,
                    repo: r.name,
                });

                repositories.push({
                    name: r.name ?? "",
                    description: r.description ?? "",
                    languages: Object.keys(languages.data),
                    updatedAt: r.updated_at ?? "",
                    url: r.html_url ?? "",
                });

                if (repos.data.length === repositories.length) {
                    const sortedRepos = repositories.sort(
                        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
                    );
                    resolve(sortedRepos);
                }
            });
        });
    }
}

export const getGithubRepository = (): IGithubRepository => {
    return new GithubRepository();
};
