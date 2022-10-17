import { Listbox } from "@headlessui/react";
import React from "react";
import { Check, ChevronDown } from "react-feather";
import { FormElement } from "../FormElement";

export type DropdownProps = {
  label?: string;
  onChange: (e: any) => void;
  selected: string | null;
  options: {value: string, label?: string}[];
};

export const Dropdown = ({
  label,
  onChange,
  selected,
  options,
}: DropdownProps) => {
    return (
    <div data-testid="div" className={`text-left pb-5`}>
      <FormElement data-testid="form-element" label={label}>
      <Listbox
        as="div"
        className="space-y-1 min-w-fit"
        value={selected}
        onChange={onChange}
        data-testid="listbox"
      >
        <div data-testid="buttonAndOptions" className="relative min-w-fit ">
          <span className="inline-block min-w-fit w-full rounded-md shadow-sm">
            <Listbox.Button data-testid="button" className=" flex bg-white shadow appearance-none border rounded w-full text-gray-700 leading-tight cursor-default relative w-full py-2 px-3 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:leading-5">
              <span className="mr-[25px] block truncate">{selected ? selected : "Select..."}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                {
                    <ChevronDown>
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    </ChevronDown>
                }
              </span>
            </Listbox.Button>
          </span>
          <Listbox.Options className="absolute mt-1 min-w-fit max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option
                data-testid={index}
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ?  "font-medium" : "font-normal"
                      }`}
                    >
                      {option.label? option.label : option.value}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                        {<Check data-testid="check"> className="h-5 w-5" aria-hidden="true"</Check>}
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
      </FormElement>
    </div>
  );
};

export default Dropdown;