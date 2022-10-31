import React from "react";
import styles from "./Checkbox.module.css";
import classNames from "classnames";

export type CheckboxProps = {
    disabled?: boolean;
    label?: string;
    checked: boolean,
    setChecked: (e: any) => void;
  };
  
  const Checkbox = ({
    label,
    checked,
    setChecked,
    disabled,
  }: CheckboxProps) => {
    return (
        <div data-testid="checkbox">
            <input
              type="Checkbox"
              checked = {checked}
              onChange = {() => {setChecked(!checked)}}
              disabled = {disabled}
              data-testid = "input"
            /> 
            <span data-testid="span" className = {classNames(styles.label)}>{label}</span>
        </div>
        );
  };
  export default Checkbox;