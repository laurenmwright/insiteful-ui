import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from '../components/components/Typography/Typography';

export default {
  title: 'Stories/Link',
  component: Link,
  argTypes: {}
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Link",
};