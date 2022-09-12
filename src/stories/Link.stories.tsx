import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from '../lib/components/Typography/Typography';

export default {
  link: 'Example/Link',
  component: Link,
  argTypes: {}
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Link",
};