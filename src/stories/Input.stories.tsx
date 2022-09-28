import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "../components";

export default {
  title: "Stories/Input",
  component: Input,
  argTypes: {
    onChanged: { action: "changed" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  onChange: action("Input is changed!"),
};
