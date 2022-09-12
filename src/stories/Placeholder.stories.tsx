import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Placeholder } from "../lib"

export default {
  title: 'Example/Placeholder',
  component: Placeholder,
  argTypes: {}
} as ComponentMeta<typeof Placeholder>;

const Template: ComponentStory<typeof Placeholder> = (args) => <Placeholder {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Placeholder",
};

