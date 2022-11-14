import React from "react";
import styles from './DateTimePicker.module.css';
import classNames from "classnames";
import { Label } from "../Typography";
import { FormElement } from "../FormElement";

export type DateTimePickerProps = {
    label?: string;
    dateTimeValue?: any;
    onChange: (newValue: string) => void;
}


export const DateTimePicker = ({
    label,
    dateTimeValue,
    onChange,
}: DateTimePickerProps) =>{
    return (
        <FormElement label={label}>
        <input
          type="datetime-local"
          data-testid="date-time-picker"
          value={dateTimeValue}
          className={classNames(styles.input)}
          onChange={(e) => onChange(e.target.value)}
        />
        </FormElement>
    );
}

export default DateTimePicker;