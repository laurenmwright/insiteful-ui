import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonTypography } from '../components';

export default {
  title: 'Stories/Typography/ButtonTypography',
  component: ButtonTypography,
  argTypes: {}
} as ComponentMeta<typeof ButtonTypography>;

const Template: ComponentStory<typeof ButtonTypography> = (args) => <ButtonTypography {...args} />;

export const ButtonTypoTemplate = Template.bind({});

ButtonTypoTemplate.args = {
  children: "Button Label Typography",
};

