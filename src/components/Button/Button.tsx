import React from "react";
import styles from "./Button.module.css";
import { Search } from "react-feather";

import classNames from "classnames";

export type ButtonProps = {
  children?: React.ReactNode | React.ReactNode[];
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  darkFont?: boolean;
  simple?: boolean;
  overrideFont?: boolean;
  overrideColor?: string;
  editor?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  disabled,
  primary,
  secondary,
  simple,
  darkFont,
  overrideColor,
  editor,
  outline,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <button data-testid = "Button"
      type={type ? type : "button"}
      onClick={onClick!}
      disabled={disabled}
      style={
        simple
          ? { color: overrideColor }
          : outline
          ? { color: overrideColor, border: "2px solid " + overrideColor }
          : primary
          ? { backgroundColor: overrideColor }
          : {}
      }
      className={classNames(
        styles.button,
        { [styles.primary]: primary },
        { [styles.editor]: editor },
        { [styles.secondary]: secondary },
        { [styles.outline]: outline },
        { [styles.darkFont]: darkFont },
        { [styles.simple]: simple }
      )}
      >
      {children}
    </button>
  );
};
export default Button;
