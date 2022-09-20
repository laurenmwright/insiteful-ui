import React from "react";
import { Fragment } from 'react'
// import { RadioGroup } from '@headlessui/react'
import { RadioGroup } from '@headlessui/react';
import { Circle, Disc } from "react-feather";
import styles from "./RadioButtonGroup.module.css";

import classNames from "classnames";

export type RadioProps = {
  label?: string,
  onChange?: (active: string) => void;
  isSelected?: string,
  defaultColor?: string,
  overrideColor?: string,
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
  defaultColor, // add later
  overrideColor // add later
}: RadioProps) => {
  return (
    <RadioGroup value={isSelected} onChange={onChange}>
      <>
      {label && <RadioGroup.Label className={ classNames(styles.label) }>{label}</RadioGroup.Label>}
      {data.map((element) => (
        /* Use the `active` state to conditionally style the active option. */
        /* Use the `checked` state to conditionally style the checked option. */
        <RadioGroup.Option key={element.id} value={element.id} as={Fragment}>
          {({ checked }) => (
              <div className={classNames(styles.item)}>
                <span className = { checked ? classNames(styles.icon) : "" }>{checked ? <Disc /> : <Circle />}</span>
                <span className = { classNames(styles.option) }>{element.value}</span>
              </div>
          )}
        </RadioGroup.Option>
      ))}
      </>
     </RadioGroup>
  );
};
export default RadioButtonGroup;
