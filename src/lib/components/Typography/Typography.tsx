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
export const Caption1 = ({ children, overrideColor, overrideFont}: TypographyProps) => {
  return (
        <h1 style = {{color : overrideColor, fontFamily : overrideFont}} className={classNames(styles.caption1)}>{children}</h1>
    )
}
export const Caption2 = ({ children, overrideColor, overrideFont}: TypographyProps) => {
  return (
        <h1 style = {{color : overrideColor, fontFamily : overrideFont}} className={classNames(styles.caption2)}>{children}</h1>
    )
}
export const Menu = ({ children, overrideColor, overrideFont}: TypographyProps) => {
  return (
        <h1 style = {{color : overrideColor, fontFamily : overrideFont}} className={classNames(styles.caption2)}>{children}</h1>
    )
}


