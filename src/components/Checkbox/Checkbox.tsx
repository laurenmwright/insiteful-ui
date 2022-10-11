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
        <div>
            <input
              type="Checkbox"
              checked = {checked}
              onChange = {() => {setChecked((value) => !value)}}
              disabled = {disabled}
              data-testid="checkbox"
            /> 
            <span className = {classNames(styles.label)} data-testid="label">{label}</span>
        </div>
        );
  };
  export default Checkbox;