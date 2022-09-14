import React from "react";
import "./RadioButton.css";
import { useState, Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import RadioButtonItem  from "./RadioButtonItem";
import { CheckCircle, Circle } from "react-feather";

import classNames from "classnames";



export type RadioProps = {
  label: string,
  onChange: (active: string) => void;
  isSelected: string,
  defaultColor: string,
  overrideColor: string,
  data: {
    id: string,
    value: string  
  }[] 
};



export const Radio = ({
  data,
  label,
  isSelected,
  onChange,
  defaultColor,
  overrideColor
}: RadioProps) => {
  console.log("data", data)
  return (
    <RadioGroup value={isSelected} onChange={onChange}>
      <>
      <RadioGroup.Label className="text-3xl radio-group-label">{label}</RadioGroup.Label>
      {data.map((element) => (
        /* Use the `active` state to conditionally style the active option. */
        /* Use the `checked` state to conditionally style the checked option. */
        <RadioGroup.Option key={element.id} value={element.id} as={Fragment}>
          {({ active, checked }) => (
            <li
              className={`${
                active ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}
            >
              <>
              {checked && <CheckCircle />}
              {element.value}
              </>
            </li>
          )}
        </RadioGroup.Option>
      ))}
      </>
     </RadioGroup>
  );
};
export default Radio;
