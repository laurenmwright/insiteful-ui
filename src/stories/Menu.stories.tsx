import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "../lib";

export default {
  title: "Example/Menu",
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
