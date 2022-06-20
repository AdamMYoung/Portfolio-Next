import * as contentful from 'contentful';

type ContentfulBlogPost = {
    title: string;
    slug: string;
    heroImage: contentful.Asset;
    topics: string[];
    summary: string;
    copy: string;
};

export type BlogPost = {
    title: string;
    slug: string;
    heroImageUrl: string;
    topics: string[];
    summary: string;
    copy: string;
    createdAt: string;
    updatedAt: string;
};

export type Model = {};

export type Use = {};

export type JobRole = {};

export type QueryOptions = {
    skip?: number;
    limit?: number;
    order?: string;
};

interface IContentRepository {
    getBlogs(options?: QueryOptions): Promise<BlogPost[]>;
    getBlog(slug: string, options?: QueryOptions): Promise<BlogPost>;
    getModels(options?: QueryOptions): Promise<Model[]>;
    getModel(slug: string, options?: QueryOptions): Promise<Model>;
    getUses(options?: QueryOptions): Promise<Use[]>;
    getJobRoles(options?: QueryOptions): Promise<JobRole[]>;
}

class ContentfulRepository implements IContentRepository {
    private _client: contentful.ContentfulClientApi;

    constructor() {
        this._client = contentful.createClient({
            space: process.env.CONTENTFUL_SPACE_ID ?? '',
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
            host: process.env.CONTENTFUL_HOST ?? '',
        });
    }
    async getBlogs(options?: QueryOptions): Promise<BlogPost[]> {
        const blogPosts = await this._client.getEntries<ContentfulBlogPost>({ content_type: 'blogPost', ...options });

        return blogPosts.items.map((i) => {
            const { title, slug, heroImage, topics, summary, copy } = i.fields;

            return {
                title,
                slug,
                heroImageUrl: `https:${heroImage.fields.file.url}`,
                topics,
                summary,
                copy,
                createdAt: i.sys.createdAt,
                updatedAt: i.sys.updatedAt,
            };
        });
    }
    async getBlog(slug: string, options?: QueryOptions): Promise<BlogPost> {
        const blogPost = await this._client.getEntries<ContentfulBlogPost>({
            content_type: 'blogPost',
            'fields.slug': slug,
            limit: 1,
            ...options,
        });

        const { title, heroImage, topics, summary, copy } = blogPost.items[0].fields;

        return {
            title,
            slug,
            heroImageUrl: `https:${heroImage.fields.file.url}`,
            topics,
            summary,
            copy,
            createdAt: blogPost.items[0].sys.createdAt,
            updatedAt: blogPost.items[0].sys.updatedAt,
        };
    }
    getModels(options?: QueryOptions): Promise<Model[]> {
        throw new Error('Method not implemented.');
    }
    getModel(slug: string, options?: QueryOptions): Promise<Model> {
        throw new Error('Method not implemented.');
    }
    getUses(options?: QueryOptions): Promise<Use[]> {
        throw new Error('Method not implemented.');
    }
    getJobRoles(options?: QueryOptions): Promise<JobRole[]> {
        throw new Error('Method not implemented.');
    }
}

export const getContentRepository = (): IContentRepository => {
    return new ContentfulRepository();
};
