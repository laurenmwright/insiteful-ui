import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { InputArea } from "../lib"

export default {
  title: "Stories/InputArea",
  component: InputArea,
  argTypes: {
    onChanged: { action: "changed" },
  },
} as ComponentMeta<typeof InputArea>;

const Template: ComponentStory<typeof InputArea> = (args) => <InputArea {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  onChange: action("InputArea is changed!"),
};
