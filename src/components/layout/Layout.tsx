import { FCC } from '../../types';

export const Layout: FCC = ({ children }) => {
    return (
        <main>
            {children}
            <footer className="pb-72 container text-center md:text-left mx-auto grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="gap-1">
                    <p className="text-xl font-semibold">Socials</p>
                    <div className="md:flex gap-4 mt-2">
                        <a className="block">GitHub</a>
                        <a className="block">Twitter</a>
                        <a className="block">Unsplash</a>
                    </div>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="grid gap-2">
                        <div className="gap-1">
                            <p className="text-xl font-semibold">Contact</p>
                            <div className=" mt-2">
                                <a>Email</a>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-xl font-semibold">Quick Links</p>
                            <div className="mt-2">
                                <a className="block">Blog</a>
                                <a className="block">About</a>
                                <a className="block">Cookies</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-xl font-semibold">My Stuff</p>
                            <div className="mt-2">
                                <a className="block">Projects</a>
                                <a className="block">3D Models</a>
                                <a className="block">Uses</a>
                                <a className="block">Stats</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
};
