import "../styles/globals.css";
import "@fontsource/source-code-pro";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="text-white bg-black">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
