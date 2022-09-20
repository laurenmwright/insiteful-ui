import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Placeholder } from "../components"

export default {
  title: 'Stories/Placeholder',
  component: Placeholder,
  argTypes: {}
} as ComponentMeta<typeof Placeholder>;

const Template: ComponentStory<typeof Placeholder> = (args) => <Placeholder {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Placeholder",
};

