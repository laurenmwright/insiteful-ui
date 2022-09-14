import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Subheading } from "../lib";

export default {
  subheading: 'Example/Subheading',
  component: Subheading,
  argTypes: {}
} as ComponentMeta<typeof Subheading>;

const Template: ComponentStory<typeof Subheading> = (args) => <Subheading {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Subheading",
};

