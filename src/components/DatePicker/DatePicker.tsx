import React from "react";
import styles from './DatePicker.module.css';
import classNames from "classnames";

export type DatePickerProps = {
    label?: string;
    dateValue?: string;
    onChange: (newValue: string) => void;

}

export const DatePicker = ({
    label,
    dateValue, 
    onChange,

}: DatePickerProps) =>{
    return (
      <input
        type="date"
        data-testid="DRP"
        label={label}
        value={dateValue}
        className={classNames(styles.input)}
        onChange={(e) => onChange(e.target.value)}
      />
    );
}
export default DatePicker;

