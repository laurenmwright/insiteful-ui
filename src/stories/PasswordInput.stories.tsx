import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { PasswordInput } from "../components";
import { FormElement } from "../components";

export default {
  title: "Stories/Components/PasswordInput",
  component: PasswordInput,
  argTypes: {
    width: {
      control: { type: 'number', max: 100, min: 10, step: 1 },
    },
     label: { control: "text" },
     placeholder: { control: "text" },
     onChange: { action : "changed", table: { disable: true } },
     value: { table: { disable: true } },
  },
} as Meta;

export const Default = ({label, width, args}) => <div style={{width: width + "%"}}><FormElement label={label} ><PasswordInput {...args} onChange = {action("Input is changed!")}/></FormElement></div>;

Default.args = {
  label: "Input Password"
};
