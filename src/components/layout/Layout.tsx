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
            <a
              href="https://github.com/AdamMYoung"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/AdamMYoung_"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              Twitter
            </a>
            <a
              href="https://unsplash.com/@adammyoung"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
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
                <Link passHref href="/">
                  <a className="block">Home</a>
                </Link>
                <Link passHref href="/blog">
                  <a className="block">Blog</a>
                </Link>
                <Link passHref href="/cookies">
                  <a className="block">Cookies</a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-xl font-semibold">My Stuff</p>
              <div className="mt-2">
                <Link passHref href="/projects">
                  <a className="block">Projects</a>
                </Link>
                <Link passHref href="/photography">
                  <a className="block">Photography</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
