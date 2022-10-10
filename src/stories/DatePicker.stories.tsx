import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import { DatePicker } from '../components';

export default {
  title: "Stories/Components/DatePicker",
  component: DatePicker,
  argTypes: {
    onChange: { table: { disable: true } },
    dateValue: { table: { disable: true } },
  }

} as Meta;

export const Default = (args) => {
  const [value, setValue] = useState<string | null >(null);
  const onChange = (v) => {
    setValue(v);
  };

  return <div style={{width: args.width + "%"}}><DatePicker dateValue={value || args.dateValue} onChange={onChange} /></div>
};