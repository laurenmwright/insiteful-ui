import { useState } from 'react';
import { Switch } from '@headlessui/react';

export type ToggleProps = {
  label: string,
  enabled: boolean,
  setEnabled: (e: any) => void;
  EnabledColor?: string,
  DisabledColor?: string,
};

export const Toggle = ({
  label,
  enabled,
  setEnabled,
  EnabledColor,
  DisabledColor,
}: ToggleProps) => {
  return (
    <div data-testid="div" className="flex items-center" >
      <p data-testid="label" className={`font-sans mr-3 text-lg`}>{label}</p>
      <Switch data-testid="switch"
        checked={enabled}
        onChange={setEnabled}
        //TODO: Custom color is not working
        className={`${enabled ? (EnabledColor ? EnabledColor : 'bg-primary'): (DisabledColor ? DisabledColor : 'bg-secondary')}
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