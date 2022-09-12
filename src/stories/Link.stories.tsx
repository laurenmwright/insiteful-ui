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

// Question: There's already a 'Button.stories.tsx' file, so what do I do about the button I created
// Question: What else do I need to do with the story book? 
//      I added the file structure similar to others. I've also got no errors either
//      NPM Run Storybook