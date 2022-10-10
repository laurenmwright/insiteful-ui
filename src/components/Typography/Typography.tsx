import React from "react";
import styles from "./Typography.module.css";
import classNames from "classnames";


export type TypographyProps = {
    children: React.ReactNode | React.ReactNode[];
    overrideColor?: string;
    overrideFont?: string;
    customStyles?: {};
    link?: string;
}

export const Heading1 = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <h1 style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.heading1) }>{children}</h1>
    )
}

export const Heading2 = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <h2 style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.heading2) }>{children}</h2>
    )
}

export const Title = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <p style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.title) }>{children}</p>
    )
}

export const Caption1 = ({ children, overrideColor, overrideFont}: TypographyProps) => {
  return (
        <caption style = {{ color : overrideColor, fontFamily : overrideFont }} className={ classNames(styles.caption1) }>{children}</caption>
    )
}

export const Caption2 = ({ children, overrideColor, overrideFont}: TypographyProps) => {
  return (
        <caption style = {{ color : overrideColor, fontFamily : overrideFont }} className={ classNames(styles.caption2) }>{children}</caption>
    )
}

export const Menu = ({ children, overrideColor, overrideFont}: TypographyProps) => {
  return (
        <p style = {{ color : overrideColor, fontFamily : overrideFont }} className={ classNames(styles.caption2) }>{children}</p>
    )
}

export const Placeholder = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <p style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.placeholder) }>{children}</p>
    )
}

export const Subheading = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <h3 style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.subheading) }>{children}</h3>
    )
}

export const Link = ({children, overrideColor, overrideFont, link}: TypographyProps ) => {
    return (
        <a href={link} style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.link) }>{children}</a>
    )
}

export const ButtonTypography = ({children, overrideColor, overrideFont}: TypographyProps ) => {
    return (
        <p style = {{ color: overrideColor, fontFamily: overrideFont }} className={ classNames(styles.button) }>{children}</p>
    )
}

export const Label = ({children, customStyles}: TypographyProps ) => {
    return (
        <label style = {customStyles} className={ classNames(styles.label) }>{children}</label>
    )
}