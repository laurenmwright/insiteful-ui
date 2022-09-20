import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading1 } from "../components";

export default {
  title: 'Stories/Heading1',
  component: Heading1,
  argTypes: {}
} as ComponentMeta<typeof Heading1>;

const Template: ComponentStory<typeof Heading1> = (args) => <Heading1 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Heading1",
};

