import classNames from 'classnames';
import { FCCTag } from '../../../types';

export const InfoBlock: FCCTag<'section'> = ({ children, className, ...rest }) => {
    return (
        <div className="pb-72">
            <section className={classNames('grid p-4 gap-6 container mx-auto', className)} {...rest}>
                {children}
            </section>
        </div>
    );
};

export const InfoBlockTitle: FCCTag<'h2'> = ({ children, className, ...rest }) => {
    return (
        <h2 className={classNames('text-5xl font-semibold max-w-3xl', className)} {...rest}>
            {children}
        </h2>
    );
};

export const InfoBlockDescription: FCCTag<'p'> = ({ children, className, ...rest }) => {
    return (
        <p className={classNames('max-w-3xl', className)} {...rest}>
            {children}
        </p>
    );
};
