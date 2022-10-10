import React from "react";
import styles from './DatePicker.module.css';
import classNames from "classnames";

export type DatePickerProps = {
    dateValue?: string;
    onChange: (newValue: string) => void;

}

export const DatePicker = ({
    dateValue, 
    onChange,

}: DatePickerProps) =>{
    return(
        <input type ="date" 
            data-testid="DRP"
            value = {dateValue} 
            className={classNames(styles.input)}
            onChange={(e) => onChange(e.target.value)}
           
        />
    )
}
export default DatePicker;

