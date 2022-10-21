import React from "react";
import { Label } from "../Typography";

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange: (newValue: string) => void;
  className?: string;
  type: "text" | "number" | "password";
};

export const Input = ({
  placeholder,
  type,
  onChange,
  value,
  className,
}: InputProps) => {
  return (
      <input
        value={value}
        type={type}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder!}
        defaultValue={value}
        data-testid="input-box"
      />
  );
};
export default Input;