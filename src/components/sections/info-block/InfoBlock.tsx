import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';
import { FCC, FCCTag } from '../../../types';

export const InfoBlock: FCCTag<'section'> = ({ children, className, ...rest }) => {
    return (
        <div className="pb-24 md:pb-72">
            <section className={classNames('grid p-4 gap-6 container mx-auto', className)} {...rest}>
                {children}
            </section>
        </div>
    );
};

export const InfoBlockTitle: FCCTag<'h2'> = ({ children, className, ...rest }) => {
    return (
        <h2 className={classNames('text-4xl md:text-5xl font-semibold max-w-3xl', className)} {...rest}>
            {children}
        </h2>
    );
};

export const InfoBlockLinkTitle: FCCTag<'a'> = ({ children, href, className, ...rest }) => {
    return (
        <Link passHref href={href ?? ''}>
            <a className={classNames('text-4xl md:text-5xl font-semibold max-w-3xl', className)} {...rest}>
                {children}
            </a>
        </Link>
    );
};

export const InfoBlockDescription: FCCTag<'p'> = ({ children, className, ...rest }) => {
    return (
        <p className={classNames('max-w-3xl', className)} {...rest}>
            {children}
        </p>
    );
};
