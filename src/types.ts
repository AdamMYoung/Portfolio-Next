import React, { ComponentPropsWithoutRef, ElementType, FC } from 'react';

/**
 * (F)unctional (C)omponent with (C)hildren.
 */
export type FCC<T = {}> = FC<
    {
        children?: React.ReactNode;
    } & T
>;

/**
 * Like FCC, but takes a tag parameter to pull default HTML attributes from the provided tag.
 */
export type FCCTag<T extends ElementType<any>> = FCC<ComponentPropsWithoutRef<T>>;
