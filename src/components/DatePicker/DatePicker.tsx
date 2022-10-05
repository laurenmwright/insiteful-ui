import React from "react";

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
            value={dateValue}
            onChange={(e) => onChange(e.target.value)}
            className={'shadow appearance-none border rounded w-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
        />
    )
}
export default DatePicker;