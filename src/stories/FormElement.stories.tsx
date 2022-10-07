import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormElement } from "../components";
import { Input } from "../components";
import { action } from '@storybook/addon-actions'

export default {
  title: 'Stories/Components/FormElement',
  component: FormElement,
  argTypes: {},
  onClick: { action: 'clicked' }
} as ComponentMeta<typeof FormElement>;

const Template: ComponentStory<typeof FormElement> = (args) => <FormElement {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: Input
};

Primary.args = {
  children: <Input type = "text" onChange = {() => {}}/>
}

