import React from "react";
import styles from "./Button.module.css";

import classNames from "classnames";

export type ButtonProps = {
  children?: React.ReactNode | React.ReactNode[];
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  editor?: boolean;
  outline?: boolean;
  twClasses?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  disabled,
  primary,
  secondary,
  editor,
  outline,
  twClasses,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick!}
      disabled={disabled}
      className={
        classNames(
          styles.button,
          { [styles.primary]: primary },
          { [styles.editor]: editor },
          { [styles.secondary]: secondary },
          { [styles.outline]: outline }
        ) + ` ${twClasses ? twClasses : ""}`
      }
    >
      {children}
    </button>
  );
};
export default Button;
