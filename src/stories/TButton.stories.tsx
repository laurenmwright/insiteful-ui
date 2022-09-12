import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../lib/components/Typography/Typography';

export default {
  button: 'Example/Button',
  component: Button,
  argTypes: {}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Button",
};

