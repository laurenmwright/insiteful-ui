import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from '../components';
import { useArgs } from "@storybook/client-api";

// export default {
//   title: 'Stories/Components/Toggle',
//   component: Toggle,
//   argTypes: {
//     onChange: { action: 'changed' }
//   }
// } as ComponentMeta<typeof Toggle>;

// const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

// export const Primary = Template.bind({});

// Primary.args = {
//   label : "Label",
// // Color not working properly in storybook -- Tailwind????
// };

export default {
  title: "Stories/Components/Toggle",
  component: Toggle,
  argTypes: {
    enabled: {
      control: "select",
      options: [true, false]
    },
  },
  args: {
    enabled: true,
    label: "Interesting Option",
  },
} as ComponentMeta<typeof Toggle>;
const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;
export const Controlled = (args) => {
  const [_, setArgs] = useArgs();
  const onChange = (e, checked) => {
    setArgs({ ...args, checked });
    args.onChange(e, checked);
  };
  return <Template {...args} onChange={onChange} />;
};
Controlled.argTypes = {
  onChange: { action: "clicked", table: { disable: true } },
};
Controlled.args = {
  checked: true,
};
export const Uncontrolled = Template.bind({});