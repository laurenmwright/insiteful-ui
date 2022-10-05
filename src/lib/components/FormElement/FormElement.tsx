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
    <div data-testid="form" className={ "mb-6 w-40 flex flex-col space-y-4" + (twClasses ?  " " + twClasses: "" )}>
      <label data-testid="label" >{label}</label>
      {children}
    </div>
  );
}