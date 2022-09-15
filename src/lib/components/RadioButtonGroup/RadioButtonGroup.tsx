import React, { forwardRef } from "react";
import "./RadioButton.css";
import { useState, Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import RadioButtonItem  from "./RadioButtonItem";
import { CheckCircle, Circle, Disc } from "react-feather";

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



export const RadioButtonGroup = ({
  data,
  label,
  isSelected,
  onChange,
  defaultColor, //what should these change?
  overrideColor // this too
}: RadioProps) => {
  let ref = React.createRef();
  console.log({isSelected})
  return (
    <RadioGroup value={isSelected} onChange={onChange}>
      <>
      <RadioGroup.Label className="radio-group-label">{label}</RadioGroup.Label>
      {data.map((element) => (
        /* Use the `active` state to conditionally style the active option. */
        /* Use the `checked` state to conditionally style the checked option. */
        <RadioGroup.Option key={element.id} value={element.id} as={Fragment}>
          
          {({ active, checked }) => (
            //<RadioButtonItem ref = {ref} label={element.id} value={element.id} checked={checked}></RadioButtonItem>
            <li>
              <div className="radio-button-item">
                <span className = {checked? "icon-style": ""}>{checked ? <Disc /> : <Circle />}</span>
                <span className = "label-style">{element.value}</span>
              </div>
            </li>
          )}
        </RadioGroup.Option>
      ))}
      </>
     </RadioGroup>
  );
};
export default RadioButtonGroup;
