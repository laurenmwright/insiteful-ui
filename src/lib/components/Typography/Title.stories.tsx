import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from './Typography';

export default {
  title: 'Example/Title',
  component: Title,
  argTypes: {}
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Title",
};

