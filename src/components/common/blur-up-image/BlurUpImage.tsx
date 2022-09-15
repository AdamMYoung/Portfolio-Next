import { BlurhashCanvas } from "react-blurhash";
import { IGetBlurhashReturn } from "plaiceholder/dist/blurhash";
import Image, { ImageProps } from "next/future/image";
import { isProd } from "../../../utils/platform";

type BlurUpImageProps = ImageProps & {
    blurhash: IGetBlurhashReturn;
};

export const BlurUpImage = ({ blurhash, className, ...rest }: BlurUpImageProps) => {
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
            <Image {...rest} className={`${className} relative z-[1]`} alt="" />
        </div>
    );
};
