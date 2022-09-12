import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from '../lib/components/Typography/Typography';

export default {
  title: 'Example/Title',
  component: Title,
  argTypes: {}
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Title",
};

