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
        <Label customStyles={{paddingBottom: "0.6250em"}}>
          {label}
        </Label>
      )}
      {children}
    </div>
  );
}