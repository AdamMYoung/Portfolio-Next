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

    return (
        <div className="relative block overflow-hidden transition-all">
            {isProd && !isLoaded && (
                <BlurhashCanvas
                    {...blurhash}
                    punch={1}
                    className={className}
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
                className={clsx("relative", isLoaded && "z-[2]", className)}
                alt={alt}
                onLoadedData={() => setIsLoaded(true)}
                {...rest}
            />
        </div>
    );
};
