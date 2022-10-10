import React from "react";
import styles from "./Button.module.css";
import { Search } from "react-feather";

import classNames from "classnames";

export type ButtonProps = {
  children?: React.ReactNode | React.ReactNode[];
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
  darkFont?: boolean;
  overrideColor?: string;
  editor?: boolean;
  outline?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  disabled,
  primary,
  secondary,
  darkFont,
  overrideColor,
  editor,
  outline,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type ? type : "button"}
      onClick={onClick!}
      disabled={disabled}
      style={outline? {color: overrideColor, border: "2px solid " + overrideColor} : primary? {backgroundColor: overrideColor} : {}}
      className={
        classNames(
          styles.button,
          { [styles.primary]: primary },
          { [styles.editor]: editor },
          { [styles.secondary]: secondary },
          { [styles.outline]: outline },
          { [styles.darkFont]: darkFont }
        )
      }
    >
      {children}
    </button>
  );
};
export default Button;
