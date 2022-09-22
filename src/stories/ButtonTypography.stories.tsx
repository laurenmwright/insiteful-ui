import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonTypography } from '../components';

export default {
  title: 'Stories/ButtonTypography',
  component: ButtonTypography,
  argTypes: {}
} as ComponentMeta<typeof ButtonTypography>;

const Template: ComponentStory<typeof ButtonTypography> = (args) => <ButtonTypography {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "ButtonTypography",
};

