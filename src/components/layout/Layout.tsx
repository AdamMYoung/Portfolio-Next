import Link from "next/link";
import { FCC } from "../../types";

export const Layout: FCC = ({ children }) => {
    return (
        <>
            <main>{children}</main>
            <footer className="pb-32 p-4 container text-center md:text-left mx-auto grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="gap-1">
                    <p className="text-xl font-semibold">Socials</p>
                    <div className="md:flex gap-4 mt-2">
                        <a href="https://github.com/AdamMYoung" target="_blank" rel="noreferrer" className="block">
                            GitHub
                        </a>
                        <a href="https://twitter.com/AdamMYoung_" target="_blank" rel="noreferrer" className="block">
                            Twitter
                        </a>
                        <a
                            href="https://www.linkedin.com/in/adammichaelyoung/"
                            target="_blank"
                            rel="noreferrer"
                            className="block"
                        >
                            LinkedIn
                        </a>
                        <a href="https://unsplash.com/@adammyoung" target="_blank" rel="noreferrer" className="block">
                            Unsplash
                        </a>
                    </div>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="grid gap-2 md:gap-4">
                        <div className="gap-1">
                            <p className="text-xl font-semibold">Contact</p>
                            <div className=" mt-2">
                                <a href="mailto:adam@aydev.uk">Email</a>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-xl font-semibold">Quick Links</p>
                            <div className="mt-2">
                                <Link href="/" className="block">
                                    Home
                                </Link>
                                <Link href="/blog" className="block">
                                    Blog
                                </Link>
                                <Link href="/cookies" className="block">
                                    Cookies
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-xl font-semibold">My Stuff</p>
                            <div className="mt-2">
                                <Link href="/projects" className="block">
                                    Projects
                                </Link>
                                <Link href="/photography" className="block">
                                    Photography
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
