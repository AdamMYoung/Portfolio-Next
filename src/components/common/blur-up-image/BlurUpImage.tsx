import { BlurhashCanvas } from "react-blurhash";
import { IGetBlurhashReturn } from "plaiceholder/dist/blurhash";
import Image, { ImageProps } from "next/future/image";
import { isProd } from "../../../utils/platform";
import clsx from "clsx";
import { useState } from "react";

type BlurUpImageProps = ImageProps & {
    blurhash: IGetBlurhashReturn;
};

export const BlurUpImage = ({ blurhash, className, alt, ...rest }: BlurUpImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const _className = clsx("relative ", isLoaded ? "blur-none z-[2]" : "blur-3xl z-0", className);

    return (
        <div className="relative block overflow-hidden transition-all">
            {isProd && (
                <BlurhashCanvas
                    {...blurhash}
                    punch={1}
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        zIndex: 1,
                        width: "100%",
                        height: "100%",
                    }}
                />
            )}
            <Image
                className={_className}
                onLoadingComplete={() => setTimeout(() => setIsLoaded(true), 500)}
                alt={alt}
                {...rest}
            />
        </div>
    );
};
