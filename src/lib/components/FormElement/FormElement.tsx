import React from "react";
import styles from "./FormElement.module.css";
import classNames from "classnames";

export type FormElementProps = {
  label?: string;
  children?: React.ReactNode | React.ReactNode[];
  twClasses?: string;
};

export function FormElement({
  label,
  twClasses,
  children,
}: FormElementProps) {
  return (
    <div className={ classNames(styles.formGroup) + (twClasses ?  " " + twClasses: "" )}>
      <label>{label}</label>
      {children}
    </div>
  );
}