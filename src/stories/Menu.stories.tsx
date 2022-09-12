import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Menu } from "../lib/components/Typography/Typography";

export default {
  title: "Example/Caption1",
  component: Menu,
  argTypes: {},
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Menu",
};
