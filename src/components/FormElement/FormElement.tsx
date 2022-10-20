import React from "react";
import styles from "./FormElement.module.css";
import classNames from "classnames";
import { Label } from "../Typography";

export type FormElementProps = {
  label?: string;
  children?: React.ReactNode | React.ReactNode[];
};

export function FormElement({
  label,
  children,
}: FormElementProps) {
  return (
    <div data-testid="form-element" className={classNames(styles.formElement)}>
      {label && (
        <Label className="pb-2.5">
          {label}
        </Label>
      )}
      {children}
    </div>
  );
}