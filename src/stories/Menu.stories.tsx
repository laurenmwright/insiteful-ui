import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "../components";

export default {
  title: "Stories/Typography/Menu",
  component: Menu,
  argTypes: {},
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} />
);

export const MenuTemplate = Template.bind({});

MenuTemplate.args = {
  children: "Menu Typography",
};
