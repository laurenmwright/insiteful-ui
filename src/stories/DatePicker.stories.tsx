import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePicker } from '../components';
import { string } from 'prop-types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Stories/Components/DatePicker',
  component: DatePicker,
  subcomponents: {DatePicker},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
//    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  },
} as ComponentMeta<typeof DatePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  rangeValue: string,
  
};