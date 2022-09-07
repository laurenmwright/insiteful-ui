import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import {Heading1} from './Typography';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Heading1',
  component: Heading1,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
//    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Heading1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading1> = (args) => <Heading1 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: "Heading1",
};

