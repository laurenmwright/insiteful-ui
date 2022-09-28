import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from '../components';

export default {
  title: 'Stories/Components/Toggle',
  component: Toggle,
  argTypes: {
    onChange: { action: 'changed' }
  }
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label : "Label",
// Color not working properly in storybook -- Tailwind????
};