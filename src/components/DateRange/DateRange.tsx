import React, {useState} from "react";
import classNames from "classnames";
import styles from "./DateRange.module.css";
import { DatePicker } from "../DatePicker";
import { Label } from "../Typography";


export type DateRangeProps = {
  startLabel?: string;
  endLabel?: string;
  startDate: string;
  endDate: string;
  setStartDate: (startDate: string) => void;
  setEndDate: (endDate: string) => void;
};

export const DateRange = ({ startLabel, endLabel, startDate, endDate, setStartDate, setEndDate}: DateRangeProps) => {
  return (
    <div>
        {/* <Label>{startLabel}</Label> */}
        <DatePicker data-testid="start-date" label = {startLabel} dateValue={startDate} onChange={setStartDate}></DatePicker>

        {/* <Label>{endLabel}</Label> */}
        <DatePicker data-testid="end-date" label = {endLabel} dateValue={endDate} onChange={setEndDate}></DatePicker>
    </div>
  );
};


export default DateRange;

