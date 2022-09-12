import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Caption2 } from "../lib/components/Typography/Typography";

export default {
  title: "Example/Caption2",
  component: Caption2,
  argTypes: {},
} as ComponentMeta<typeof Caption2>;

const Template: ComponentStory<typeof Caption2> = (args) => (
  <Caption2 {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Caption2",
};