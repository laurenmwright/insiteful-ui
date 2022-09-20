import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Caption1 } from "../components";

export default {
  title: "Stories/Caption1",
  component: Caption1,
  argTypes: {},
} as ComponentMeta<typeof Caption1>;

const Template: ComponentStory<typeof Caption1> = (args) => (
  <Caption1 {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Caption1",
};
