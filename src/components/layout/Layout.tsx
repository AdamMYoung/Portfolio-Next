import Link from 'next/link';

import { FCC } from '../../types';

const Navigation = () => {
    const isScrolled = false;
    return (
        <nav
            className={`fixed p-4 flex transition-all duration-100 gap-6 align-middle text-2xl font-semibold w-full ${
                isScrolled ? 'visible opacity-100' : 'hidden opacity-0'
            }`}
        >
            <Link href="/" passHref>
                <a className="font-bold">Adam Young</a>
            </Link>
            <div className="flex mx-auto gap-6">
                <Link href="/about" passHref>
                    <a>About</a>
                </Link>
                <Link href="/q-and-q" passHref>
                    <a>Q&A</a>
                </Link>
                <Link href="/my-stuff" passHref>
                    <a>My Stuff</a>
                </Link>
            </div>
            <Link href="/blog" passHref>
                <a className="text-gradient-blue-purple rounded">Blog</a>
            </Link>
        </nav>
    );
};

export const Layout: FCC = ({ children }) => {
    return (
        <div>
            <div className="static container mx-auto ">
                <Navigation />
            </div>

            <main>{children}</main>
        </div>
    );
};
