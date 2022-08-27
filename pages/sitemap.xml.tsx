import { GetServerSideProps } from "next";
import { getContentRepository } from "../src/utils/content";

const Sitemap = () => {};

export default Sitemap;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const contentRepository = getContentRepository();
    const blogPosts = await contentRepository.getBlogs();

    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://aydev.uk",
    }[process.env.NODE_ENV as string];

    const currentDate = new Date().toISOString();

    const staticLinks = [
        { link: "/", date: currentDate },
        { link: "/cookies", date: currentDate },
        { link: "/projects", date: currentDate },
        { link: "/blog", date: currentDate },
    ];
    const blogLinks = blogPosts.map((b) => ({ link: `/blog/${b.slug}`, date: b.updatedAt }));

    const links = [...staticLinks, ...blogLinks];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${links
           .map(
               (l) => `
       <url>
         <loc>${baseUrl}${l.link}</loc>
         <lastmod>${l.date}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>1.0</priority>
       </url>
     `
           )
           .join("")}
      </urlset>
    `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};
