import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading1 } from "../components";

export default {
  title: 'Stories/Typography/Heading1',
  component: Heading1,
} as ComponentMeta<typeof Heading1>;

const Template: ComponentStory<typeof Heading1> = (args) => <Heading1 {...args} />;

export const Heading1Typography = Template.bind({});

Heading1Typography.args = {
  children: "Heading1",
};

