import clsx from "clsx";

import { FCCTag } from "../../../types";

export const Hero: FCCTag<"div"> = ({ children, className, ...rest }) => {
    return (
        <div
            className={clsx("flex p-4 container min-h-screen align-center mx-auto text-center md:text-left", className)}
            {...rest}
        >
            {children}
        </div>
    );
};

export const HeroTextBlock: FCCTag<"div"> = ({ children, className, ...rest }) => {
    return (
        <div className={clsx("flex flex-col gap-8 min-h-full max-w-3xl w-full justify-center", className)} {...rest}>
            {children}
        </div>
    );
};

export const HeroText: FCCTag<"h1"> = ({ children, className, ...rest }) => {
    return (
        <h1 className={clsx("text-4xl md:text-6xl font-bold max-w-3xl", className)} {...rest}>
            {children}
        </h1>
    );
};
