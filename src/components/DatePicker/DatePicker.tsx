import React from "react";

export type DatePickerProps = {
    rangeValue?: string;
    onChange: (newValue: string) => void;
    min?: any;
    max?: any;
}

export const DatePicker = ({
    rangeValue, 
    onChange,
    min,
    max,

}: DatePickerProps) =>{
    return(
        <input type ="date" 
            data-testid="DRP" 
            onChange={(e) => onChange(e.target.value)}
            className={'shadow appearance-none border rounded w-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
        />
    )
}
export default DatePicker;