import React from "react";

import styles from "./DatePicker.module.css";

import classNames from "classnames";

export type DatePickerProps = {
    dateValue?: string;
    onChange?: (newValue: string) => void;
}

export const DatePicker = ({
    dateValue, 
    onChange,
    min,
    max,

}: DatePickerProps) =>{
    return(
        <input type ="date" 
            data-testid="DRP"
            value={dateValue}
            onChange={(e) => onChange!(e.target.value)}
            className={'shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
        />
    )
}
export default DatePicker;

