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

    const _className = clsx("relative z-[1] transition-all", isLoaded ? "blur(0)" : "blur(1.5rem)", className);

    return (
        <div className="relative block overflow-hidden">
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
                        width: "100%",
                        height: "100%",
                    }}
                />
            )}
            <Image className={_className} onLoadingComplete={() => setIsLoaded(true)} alt={alt} {...rest} />
        </div>
    );
};
