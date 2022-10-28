import "../styles/globals.css";

import { Source_Code_Pro } from "@next/font/google";
import type { AppProps } from "next/app";
import clsx from "clsx";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
    const className = clsx("text-white bg-black", sourceCodePro.className);

    return (
        <div className={className}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
