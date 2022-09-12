import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading2 } from "../lib";

export default {
  title: 'Example/Heading2',
  component: Heading2,
  argTypes: {}
} as ComponentMeta<typeof Heading2>;

const Template: ComponentStory<typeof Heading2> = (args) => <Heading2 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Heading2",
};

