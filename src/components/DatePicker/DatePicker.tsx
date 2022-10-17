import React from "react";
import styles from './DatePicker.module.css';
import classNames from "classnames";
import { Label } from "../Typography";

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
      <Label>
        {label}
        <div>
          <input
            type="date"
            data-testid="DRP"
            value={dateValue}
            className={classNames(styles.input)}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </Label>
    );
}
export default DatePicker;

