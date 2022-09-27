import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Caption1 } from "../components";

export default {
  title: "Stories/Typography/Caption1",
  component: Caption1,
} as ComponentMeta<typeof Caption1>;

const Template: ComponentStory<typeof Caption1> = (args) => (
  <Caption1 {...args} />
);

export const Caption1Template = Template.bind({});

Caption1Template.args = {
  children: "Caption1 Typography",
};
