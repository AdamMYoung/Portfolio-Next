import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { BlogPost } from '../../../utils/content';

type BlogCardProps = {
    blog: BlogPost;
    color: string;
};

export const BlogCard: FC<BlogCardProps> = ({ blog, color }) => {
    const { title, summary, heroImageUrl, slug } = blog;

    return (
        <Link href={`/blog/${slug}`}>
            <section className="grid gap-4 cursor-pointer group">
                <div className="relative h-72">
                    <Image layout="fill" objectFit="cover" className="rounded" src={heroImageUrl} alt={title} />
                </div>

                <h3 className={`text-2xl h-16 ${color} transition-colors duration-150`}>{title}</h3>
                <p className="text-gray-400 mb-auto">{summary}</p>
            </section>
        </Link>
    );
};
