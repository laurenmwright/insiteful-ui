import React from "react";
import styles from "./Button.module.css";
import { useState, Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'

import classNames from "classnames";

export type RadioProps = {
  label: string,
  defaultColor: string,
  overrideColor: string
};



export const Radio = ({
  label,
  defaultColor,
  overrideColor
}: RadioProps) => {
  let [plan, setPlan] = useState('startup')
  return (
    <RadioGroup value={plan} onChange={setPlan}>
      <RadioGroup.Label className="text-3xl">{label}</RadioGroup.Label>
      <RadioGroup.Option value="startup" className="bg-white TEST rounded-md shadow">
        {({ checked }) => (
          <span className={checked ? 'bg-blue-200' : ''}>Startup</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="business">
        {({ checked }) => (
          <span className={checked ? 'bg-blue-200' : ''}>Business</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        {({ checked }) => (
          <span className={checked ? 'bg-blue-200' : ''}>Enterprise</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
};
export default Radio;
