import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { RadioButtonGroup } from "../components";

export default {
  title: 'Stories/Components/RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {
    onChanged: { action: 'changed' }
  },
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => <RadioButtonGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Select an option:",
  data: [{id: "Test 1", value: "Test 1"}, {id: "Test 2", value: "Test 2"}, {id: "Test 3", value: "Test 3"}],
  onChange: action("RadioButtonGroup is changed!")
};