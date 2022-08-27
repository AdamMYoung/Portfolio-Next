import classNames from "classnames";
import { ComponentPropsWithoutRef, FC } from "react";

type FireTextProps = ComponentPropsWithoutRef<"span"> & {
    children: string;
};

export const FireText: FC<FireTextProps> = ({ children, className, ...rest }) => {
    return (
        <span className={classNames("animate-fire", className)} {...rest}>
            {children.split("").map((c, index) => (
                <span className="animate-burn" key={index}>
                    {c}
                </span>
            ))}
        </span>
    );
};
