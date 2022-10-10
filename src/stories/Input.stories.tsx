import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "../components";

export default {
  title: "Stories/Components/Input",
  component: Input,
  argTypes: {
    width: {
      control: { type: 'number', max: 100, min: 10, step: 1 },
    },
     label: { control: "text" },
     placeholder: { control: "text" },
     onChange: { table: { disable: true } },
     value: { table: { disable: true } },

  },
} as Meta;

export const Default = (args) => <div style={{width: args.width + "%"}}><Input {...args} /></div>;

Default.args = {
  type: "text",
  label: "Input numerical value here:",
  placeholder: "Input number...",
  onChange: action("Input is changed!"),
};
export const Number = (args) => <div style={{width: args.width + "%"}}><Input {...args} /></div>;

Number.args = {
  type: "number",
  label: "Input number here: ",
  placeholder: "Type number...",
  onChange: action("Input is changed!"),
};

export const Password = (args) => <div style={{width: args.width + "%"}}><Input {...args} /></div>;

Password.args = {
  type: "password",
  label: "Input password here: ",
  placeholder: "Type password...",
  onChange: action("Input is changed!"),
};