import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Button } from "../components";

export default {
  title: 'Stories/Components/Button',
  component: Button,
  subcomponents: {Button},
  argTypes: {
    onClick: { action: 'clicked' }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "text",
  onClick: action("Button is clicked!")
};

