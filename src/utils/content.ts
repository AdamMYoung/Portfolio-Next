import * as contentful from 'contentful';

export type BlogPost = {};

export type Model = {};

export type Use = {};

export type JobRole = {};

interface IContentRepository {
    getBlogs(): BlogPost[];
    getBlog(slug: string): BlogPost;
    getModels(): Model[];
    getModel(slug: string): Model;
    getUses(): Use[];
    getJobRoles(): JobRole[];
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
    getBlogs(): BlogPost[] {
        return [];
    }
    getBlog(slug: string): BlogPost {
        return [];
    }
    getModels(): Model[] {
        return [];
    }
    getModel(slug: string): Model {
        return [];
    }
    getUses(): Use[] {
        return [];
    }
    getJobRoles(): JobRole[] {
        return [];
    }
}

export const getContentRepository = (): IContentRepository => {
    return new ContentfulRepository();
};
