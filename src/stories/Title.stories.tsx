import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from "../lib";

export default {
  title: 'Stories/Title',
  component: Title,
  argTypes: {}
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Title",
};

