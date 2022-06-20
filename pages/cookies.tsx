import Link from 'next/link';
import React from 'react';

import { Layout } from '../src/components/layout';
import { Hero, HeroTextBlock } from '../src/components/sections/hero';

const Cookies = () => {
    return (
        <Layout>
            <Hero>
                <HeroTextBlock>
                    <Link href="/">{'< Back'}</Link>
                    <div className="grid gap-4 ">
                        <h1 className="text-3xl">Disabling Cookies</h1>
                        <p>
                            Cookies can be disabled by declining the cookie popup displayed when the site is first
                            visited. To remove a previously accepted cookie, a hard reload of the page would be
                            required.
                        </p>
                    </div>
                    <div className="grid gap-4 ">
                        <h2 className="text-3xl">What Cookies Are Used?</h2>
                        <div className="grid gap-4">
                            <p>
                                <b>Google Analytics</b> - Google Analytics is used to understand popular content, view
                                traffic to the site, and understand and where how the content is consumed.
                            </p>
                            <p>
                                <b>Hotjar</b> - Hotjar is used to view the post popular areas of pages, and to
                                understand where users drop off when viewing content within the site. This is used to
                                improve content moving forwards.
                            </p>
                        </div>
                    </div>
                </HeroTextBlock>
            </Hero>
        </Layout>
    );
};

export default Cookies;
