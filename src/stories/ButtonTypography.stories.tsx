import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonTypography } from '../lib/components/Typography/Typography';

export default {
  button: 'Example/Button',
  component: ButtonTypography,
  argTypes: {}
} as ComponentMeta<typeof ButtonTypography>;

const Template: ComponentStory<typeof ButtonTypography> = (args) => <ButtonTypography {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "ButtonTypography",
};

