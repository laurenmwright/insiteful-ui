import React from "react";
export declare type TypographyProps = {
    children: React.ReactNode | React.ReactNode[];
    overrideColor?: string;
    overrideFont?: string;
};
export declare const Heading1: ({ children, overrideColor, overrideFont }: TypographyProps) => JSX.Element;
export declare const Heading2: ({ children, overrideColor, overrideFont }: TypographyProps) => JSX.Element;
export declare const Title: ({ children, overrideColor, overrideFont }: TypographyProps) => JSX.Element;
export declare const Placeholder: ({ children, overrideColor, overrideFont }: TypographyProps) => JSX.Element;
