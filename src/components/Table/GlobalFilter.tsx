
import React, { useMemo, useState, useEffect } from 'react';
import {
    useAsyncDebounce,
  } from 'react-table';

import { Input } from "../Input";

export function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)
  
    return (
      <Input
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e);
          onChange(e);
        }}
        placeholder={`Search`}
        className="w-60"
      />
    )
  }