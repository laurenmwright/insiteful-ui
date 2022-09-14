import React from "react";
import "./RadioButton.css";
import { RadioGroup } from "@headlessui/react";
import { CheckCircle, Circle } from "react-feather";

import classNames from "classnames";

export type RadioButtonItemProps = {
  label: string;
  value: string;
  checked: boolean;
};

export const RadioButtonItem = ({ label, value, checked }: RadioButtonItemProps) => {
    console.log("Hi: ", label)
  return (
    <>
      {checked ? (
        <>
          <CheckCircle />
        </>
      ) : (
        <>
          <Circle />
        </>
      )}
      <RadioGroup.Label>{label}</RadioGroup.Label>
    </>
  );
};
export default RadioButtonItem;
