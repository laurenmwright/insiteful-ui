import React, {useState} from 'react';
import { ComponentStory, ComponentMeta, Meta } from '@storybook/react';
import { Dropdown } from '../components';
import { useArgs } from "@storybook/client-api";


export default {
  title: "Stories/Components/Dropdown",
  component: Dropdown,
  argTypes: {
    width: {
      control: { type: 'number', max: 100, min: 30, step: 1 },
    },
    options: { table: { disable: true } },
    onChange: { table: { disable: true } },
    selected: { table: { disable: true } },
  }

} as Meta;

const options = [
  { value: 'Facebook', label: 'Facebook' },
  { value: 'Twitter', label: 'Twitter' },
  { value: 'Github', label: 'GitHub' },
  { value: 'Google', label: 'Google' },
  { value: 'Azure', label: 'Azure' },
];
export const Default = (args) => {
  const [value, setValue] = useState<string | null >(null);
  const onChange = (v) => {
    setValue(v);
  };

  return <div style={{width: args.width + "%"}}><Dropdown selected={value} onChange={onChange} options={options} label={args.label} /></div>
};

Default.args = {
  label: "Please Select a Platform:"
}
