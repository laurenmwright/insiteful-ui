import React from "react";
import styles from "./Typography.module.css";
import classNames from "classnames";


export type TypographyProps = {
    children: React.ReactNode | React.ReactNode[];
    overrideColor?: string;
    overrideFont?: string;
    className?: string;
    link?: string;
}

export const Heading1 = ({children, className, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <h1 style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.heading1)  + ` ${className ? className : ""}`}>{children}</h1>
    )
}

export const Heading2 = ({children, overrideColor, overrideFont, className}: TypographyProps ) => {
    return (
        <h2 style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.heading2) + ` ${className ? className : ""}` }>{children}</h2>
    )
}

export const Title = ({children, overrideColor, overrideFont, className}: TypographyProps ) => {
    return (
        <p style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.title) + ` ${className ? className : ""}` }>{children}</p>
    )
    
}

export const Caption1 = ({ children, overrideColor, overrideFont, className}: TypographyProps) => {
  return (
        <caption style = {{ color : overrideColor, fontFamily : overrideFont }} className={ classNames(styles.caption1) + ` ${className ? className : ""}` }>{children}</caption>
    )
}

export const Caption2 = ({ children, overrideColor, overrideFont, className}: TypographyProps) => {
  return (
        <caption style = {{ color : overrideColor, fontFamily : overrideFont }} className={ classNames(styles.caption2) + ` ${className ? className : ""}` }>{children}</caption>
    )
}

export const Menu = ({ children, overrideColor, className, overrideFont}: TypographyProps) => {
  return (
        <p style = {{ color : overrideColor, fontFamily : overrideFont }} className={ classNames(styles.caption2) + ` ${className ? className : ""}` }>{children}</p>
    )
}

export const Placeholder = ({children, overrideColor, className, overrideFont}: TypographyProps ) => {
    return (
        <p style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.placeholder) + ` ${className ? className : ""}` }>{children}</p>
    )
}

export const Subheading = ({children, overrideColor, className, overrideFont}: TypographyProps ) => {
    return (
        <h3 style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.subheading) + ` ${className ? className : ""}` }>{children}</h3>
    )
}

export const Link = ({children, overrideColor, className, overrideFont, link}: TypographyProps ) => {
    return (
        <a href={link} style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.link)  + ` ${className ? className : ""}`}>{children}</a>
    )
}

export const ButtonTypography = ({children, overrideColor, className, overrideFont}: TypographyProps ) => {
    return (
        <p style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.button)  + ` ${className ? className : ""}`}>{children}</p>
    )
}

export const Label = ({children, className}: TypographyProps ) => {
    return (
        <label className={ classNames(styles.label) + ` ${className ? className : ""}`  }>{children}</label>
    )
}