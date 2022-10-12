import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDown } from "react-feather";

export type MenuProps = {
  data: {
    label: string;
    link: string;
  }[];
};

export const MenuComponent = ({ data }: MenuProps) => {
  return (
    <div className="fixed top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-actionBlue px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
            <ChevronDown
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {data.map((data, index) => (
                <Menu.Item data-testid={index} key={index}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-lightGray text-darkGray" : "text-darkGray"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {data.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
export default MenuComponent;
