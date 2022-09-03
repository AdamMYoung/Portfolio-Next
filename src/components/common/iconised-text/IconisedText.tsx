import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { ComponentPropsWithoutRef, FC } from "react";
import { FCCTag } from "../../../types";

type IconisedTextProps = ComponentPropsWithoutRef<"span"> & {
    src: StaticImageData;
    children: React.ReactNode;
};

export const IconisedText: FC<IconisedTextProps> = ({ children, src, className, ...rest }) => {
    return (
        <div className="inline-block relative" {...rest}>
            <div className={clsx("absolute top-0 scale-150", className)}>
                <Image src={src} alt="" />
            </div>
            <span className="z-10">{children}</span>
        </div>
    );
};
