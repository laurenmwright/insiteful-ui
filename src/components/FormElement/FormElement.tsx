import React from "react";
import styles from "./FormElement.module.css";
import classNames from "classnames";

export type FormElementProps = {
  label?: string;
  children?: React.ReactNode | React.ReactNode[];
};

export function FormElement({
  label,
  children,
}: FormElementProps) {
  return (
    <div data-testid="form" className={classNames(styles.formElement)}>
      <label data-testid="label" className={classNames(styles.label)}>{label}</label>
      {children}
    </div>
  );
}