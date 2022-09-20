import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormElement } from '../lib/components/FormElement/FormElement';

export default {
  title: 'Stories/FormElement',
  component: FormElement,
  argTypes: {}
} as ComponentMeta<typeof FormElement>;

const Template: ComponentStory<typeof FormElement> = (args) => <FormElement {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "FormElement",
};

