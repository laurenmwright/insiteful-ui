import React from "react";
import classNames from "classnames";
import { Label } from "../Typography";
import { FormElement } from "../FormElement";

export type DateTimePickerProps = {
    label?: string;
    value?: string;
    onChange: (newValue: string) => void;
}


export const DateTimePicker = ({
    label,
    value,
    onChange,
}: DateTimePickerProps) =>{
    return (
      <FormElement label={label}>
        <input
          type="datetime-local"
          data-testid="date-time-picker"
          value={value}
          className="pt-2 pb-2 pl-3 pr-3 leading-tight w-56 rounded border appearance-none"
          onChange={(e) => onChange(e.target.value)}
        />
      </FormElement>
    );
};
