import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Label } from '../Typography';

export type ToggleProps = {
  label?: string,
  enabled: boolean,
  disabled?: boolean,
  onChange: (e: any) => void;
};

export const Toggle = ({
  label,
  enabled,
  disabled,
  onChange,
}: ToggleProps) => {
  return (
    <div data-testid="div" className="flex gap-6 items-center" >

      {label && <Label data-testid="label">{label}</Label>}
      <Switch data-testid="switch"
        disabled={disabled}
        checked={enabled}
        onChange={onChange}
        //TODO: Custom color is not working
        className={`${enabled ?  'bg-actionBlue':  'bg-lightGray'}
              relative inline-flex h-[27px] w-[63px] 
              shrink-0
              cursor-pointer rounded-full border-2 
              border-transparent transition-colors duration-200 
              ease-in-out focus:outline-none 
              focus-visible:ring-1  
              focus-visible:ring-white 
              focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span  data-testid="circle"
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                pointer-events-none 
                inline-block 
                h-[23px] 
                w-[23px] 
                transform rounded-full 
                bg-white 
                shadow-lg 
                ring-0 
                transition 
                duration-200 
                ease-in-out`}
        />
      </Switch>
    </div>
  )
}

export default Toggle;