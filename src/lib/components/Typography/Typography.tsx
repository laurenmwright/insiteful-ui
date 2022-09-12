import React from "react";
import styles from "./Typography.module.css";
import classNames from "classnames";


export type TypographyProps = {
    children: React.ReactNode | React.ReactNode[];
}
export const Heading1 = ({children}: TypographyProps ) => {
    return (
        <h1 className={classNames(styles.heading1)}>{children}</h1>
    )
}

