import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormElement } from '../lib/components/FormElement/FormElement';
//import Button from './Button.stories';
import Button from '../lib/components/Button/Button';
import { action } from '@storybook/addon-actions'

export default {
  title: 'Stories/FormElement',
  component: FormElement,
  argTypes: {},
  onClick: { action: 'clicked' }
} as ComponentMeta<typeof FormElement>;

const Template: ComponentStory<typeof FormElement> = (args) => <FormElement {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "FormElement",
  Button
};

Primary.args = {
  //children: <Button children="test" primary onClick={action("Button is clicked!")}/>
  children: <Button primary onClick={action("Button was clicked!")}>Button1</Button>
}

