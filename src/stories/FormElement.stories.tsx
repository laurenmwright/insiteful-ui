import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormElement } from "../components";
import { Button } from "../components";
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
  primary: true,
  children: "FormElement",
  Button
};

Primary.args = {
  children: <Button primary onClick={action("Button was clicked!")}>Button1</Button>
}

