import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { BlogPost } from '../../../utils/content';

type BlogCardProps = {
    blog: BlogPost;
    color: string;
    className?: string;
};

export const BlogCard: FC<BlogCardProps> = ({ blog, color }) => {
    const { title, summary, heroImageUrl, slug } = blog;

    return (
        <Link href={`/blog/${slug}`}>
            <section className="grid gap-4 snap-mandatory snap-start cursor-pointer group w-full">
                <div className="relative h-72">
                    <Image layout="fill" objectFit="cover" className="rounded h-72" src={heroImageUrl} alt={title} />
                </div>

                <h3 className={`text-2xl ${color} transition-colors duration-150`}>{title}</h3>
                <p className="text-gray-400 mb-auto">{summary}</p>
            </section>
        </Link>
    );
};
