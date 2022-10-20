import React from "react";
import styles from './DatePicker.module.css';
import classNames from "classnames";
import { Label } from "../Typography";
import { FormElement } from "../FormElement";


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
        <FormElement label={label}>
        <input
          type="date"
          data-testid="date-picker"
          value={dateValue}
          className={classNames(styles.input)}
          onChange={(e) => onChange(e.target.value)}
        />
        </FormElement>
    );
}
export default DatePicker;

