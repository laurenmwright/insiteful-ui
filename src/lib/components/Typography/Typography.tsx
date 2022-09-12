import React from "react";
import styles from "./Typography.module.css";
import classNames from "classnames";


export type TypographyProps = {
    children: React.ReactNode | React.ReactNode[];
    overrideColor?: string;
    overrideFont?: string;
}
export const Heading1 = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <h1 style = {{color: overrideColor,fontFamily: overrideFont}} className={classNames(styles.heading1)}>{children}</h1>
    )
}

export const Heading2 = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <h1 style = {{color: overrideColor,fontFamily: overrideFont}} className={classNames(styles.heading2)}>{children}</h1>
    )
}

export const Title = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <h1 style = {{color: overrideColor,fontFamily: overrideFont}} className={classNames(styles.title)}>{children}</h1>
    )
}

export const Subheading = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <h3 style = {{color: overrideColor,fontFamily: overrideFont}} className={classNames(styles.subheading)}>{children}</h3>
    )
}

export const Link = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <h3 style = {{color: overrideColor,fontFamily: overrideFont}} className={classNames(styles.link)}>{children}</h3>
    )
}

export const Button = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <h3 style = {{color: overrideColor,fontFamily: overrideFont}} className={classNames(styles.button)}>{children}</h3>
    )
}

