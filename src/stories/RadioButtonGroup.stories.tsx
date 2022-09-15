import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { RadioButtonGroup } from "../lib";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/RadioButtonGroup',
  component: RadioButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
//    backgroundColor: { control: 'color' },
    onChanged: { action: 'changed' }
  },
} as ComponentMeta<typeof RadioButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioButtonGroup> = (args) => <RadioButtonGroup {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  data: [{id: "Test 1", value: "Test 1"}, {id: "Test 2", value: "Test 2"}, {id: "Test 3", value: "Test 3"}],
  onChange: action("RadioButtonGroup is changed!")
};

