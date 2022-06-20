import { useEffect, useState } from 'react';
import { FCCTag } from '../../../types';

export const FadeIn: FCCTag<'div'> = ({ children, className, ...rest }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [fadeElementRef, setFadeElementRef] = useState<HTMLDivElement | null>();

    useEffect(() => {
        if (fadeElementRef) {
            const intersectionObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.intersectionRatio > 0.4) {
                            setIsVisible(true);
                        }
                    });
                },
                { threshold: 0.4 }
            );

            intersectionObserver.observe(fadeElementRef);
        }
    }, [fadeElementRef]);

    return (
        <div
            ref={(ref) => setFadeElementRef(ref)}
            className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        >
            {children}
        </div>
    );
};
