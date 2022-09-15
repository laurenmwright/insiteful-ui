import React, { forwardRef } from "react";
import "./RadioButton.css";
import { RadioGroup } from "@headlessui/react";
import { CheckCircle, Circle, Disc } from "react-feather";

import classNames from "classnames";
//RIGHT NOW WE ARENT USING THIS DELETE BEFORE MERGING
export type RadioButtonItemProps = {
  label: string;
  value: string;
  checked: boolean;
};

export const RadioButtonItem = ({ label, value, checked }: RadioButtonItemProps) => {
  return (
    <div className = "radio-button-item">
      {checked ? (
        <>
          <Disc />
        </>
      ) : (
        <>
          <Circle />
        </>
      )}
      <RadioGroup.Label>{label}</RadioGroup.Label>
    </div>
  );
};
export default RadioButtonItem;
