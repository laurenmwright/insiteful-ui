import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import { DateRange } from '../components';
 
export default {
  title: "Stories/Components/DateRange",
  component: DateRange,
  argTypes: {
    starLabel: { table: { disable: true } },
    endLabel: { table: { disable: true } },
    startDate: { table: { disable: true } },
    endDate: { table: { disable: true } },
    setStartDate: { table: { disable: true } },
    setEndDate: { table: { disable: true } },
  },
} as Meta;

export const Default = (args) => {
  const [value, setValue] = useState<string | string >();
  const onChange = (v) => {
    setValue(v);
  };

  const [startDate, setStartDate] = useState("2020-10-10");
  const [endDate, setEndDate] = useState("2020-10-30");

return <div><DateRange startLabel = {"Please choose a start date: "} endLabel = {"Please choose an end date:"} startDate = {startDate} endDate = {endDate} setStartDate = {setStartDate} setEndDate = {setEndDate}></DateRange> </div>
};

