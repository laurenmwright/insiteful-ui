import React from "react";
import { ComponentStory, ComponentMeta, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "../components";

export default {
  title: "Stories/Components/Button",
  component: Button,
  subcomponents: { Button },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    outline: { control: "boolean" },
    darkFont: { control: "boolean" },
    onClick: { action: "clicked", table: { disable: true } },
    primary: { table: { disable: true } },
    secondary: { table: { disable: true } },
    editor: { table: { disable: true } },
    type: { table: { disable: true } },
  },
} as Meta;

export const Default = ({ variant, outline, ...args }) => {
  if (variant === "primary") {
    console.log(args);
    return <Button primary outline={outline} {...args} />;
  } else {
    return <Button secondary outline={outline} {...args} />;
  }
};

Default.args = {
  variant: "primary",
  outline: false,
  darkFont: false,
  children: "Click Me!",
  onClick: action("Button is clicked!"),
};


export const WithIcon = ({ variant, outline, ...args }) => {
  if (variant === "primary") {
    console.log(args);
    return <Button primary outline={outline} {...args} />;
  } else {
    return <Button secondary outline={outline} {...args} />;
  }
};

WithIcon.args = {
  variant: "primary",
  outline: false,
  darkFont: false,
  children: <div style={{display: "flex", gap: 10}}><div>🔍</div><div>Search</div></div>,
  onClick: action("Button is clicked!"),
};
