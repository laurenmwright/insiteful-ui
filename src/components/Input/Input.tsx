import React from "react";

export type InputProps = {
  placeholder?: string;
  label?: string;
  value?: string;
  onChange: (newValue: string) => void;
  className?: string;
  type: "text" | "number";
};

export const Input = ({
  placeholder,
  className,
  label,
  type,
  onChange,
  value,
}: InputProps) => {
  return (
    <div className={`${className}`}>
      {label && (
        <label
          className={`text-left block text-gray-700 text-sm font-bold mb-2`}
        >
          {label}
        </label>
      )}
      <input
        value={value}
        type={type}
        className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder!}
        defaultValue={value}
      />
    </div>
  );
};
export default Input;