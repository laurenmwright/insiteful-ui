import React from "react";

export type DatePickerProps = {
    rangeValue?: string;
    onChange: (newValue: string) => void;
}

export const DatePicker = ({
    rangeValue, 
    onChange,
}: DatePickerProps) =>{
    return(
        <input type ="date" 
            data-testid="DRP" 
            value={rangeValue}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}
export default DatePicker;