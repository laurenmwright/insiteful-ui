import React, {useState} from "react";
import classNames from "classnames";
import styles from "./DateRange.module.css";
import { DatePicker } from "../DatePicker";

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
        <div data-testid="start-date" className={classNames(styles.dateRange1)}>
          <DatePicker label = {startLabel} dateValue={startDate} onChange={setStartDate}></DatePicker>
        </div>
        <div data-testid="end-date" className={classNames(styles.dateRange2)}>
          <DatePicker label = {endLabel} dateValue={endDate} onChange={setEndDate}></DatePicker>
        </div>
    </div>
  );
};


export default DateRange;

