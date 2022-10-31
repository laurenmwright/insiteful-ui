import React, {useState} from "react";
import { Eye, EyeOff } from "react-feather";
import { Label } from "../Typography";

export type PasswordInputProps = {
  placeholder?: string;
  value?: string;
  onChange: (newValue: string) => void;
};

export const PasswordInput = ({
  placeholder,
  onChange,
  value,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  
  return (
    <div className="flex">
      <input
        value={value}
        type={showPassword? "text" : "password"}
        className={'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder!}
        data-testid="password-input-box"
      />
      <button data-testid="hide-icon" className="-translate-x-9" onClick={() => setShowPassword(!showPassword)}>
        {
          showPassword? 
          <Eye data-testid = "eye" color="var(--color-mediumGray)" size={24} /> :
          <EyeOff data-testid = "eye-off" color="var(--color-mediumGray)" size={24} />
        }

      </button> 
      </div>
  );
};
export default PasswordInput;