import React from "react";

export type DatePickerProps = {
    value?: string;
    onChange: (newValue: string) => void;
}

export const DatePicker = ({
    value, 
    onChange,
}: DatePickerProps) =>{
    return(
        <input type ="date" 
            data-testid="DRP" 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={'shadow appearance-none border rounded w-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
        />
    )
}
export default DatePicker;