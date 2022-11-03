import { Menu as MenuComponent, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDown } from "react-feather";
import { ButtonTypography } from "../Typography";

export type MenuProps = {
  title?: string;
  anchor?: React.ReactNode | React.ReactNode[];
  positionLeft?: boolean;
  data: {
    label: string;
    link: string;
  }[];
};

export const Menu = ({ title, anchor, positionLeft, data }: MenuProps) => {
  return (
    <div
      className={positionLeft ? "text-left z-50" : " text-right z-50"}
      data-testid="div"
    >
      {/* + positionLeft? "right-0" : "" */}
      <MenuComponent as="div" className="relative inline-block text-left">
            {anchor ? (
              <MenuComponent.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              {anchor}
              </MenuComponent.Button>
            ) : (
              <MenuComponent.Button className="inline-flex w-full justify-center rounded-md bg-actionBlue px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {title}
                <ChevronDown
                  className="ml-2 -mr-1 h-5 w-5"
                  aria-hidden="true"
                />
              </MenuComponent.Button>
            )}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuComponent.Items
            className={
              positionLeft
                ? "mw-56 absolute mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                : "mw-56 right-0 absolute mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
            }
          >
            <div className="px-1 py-1 ">
              {data.map((data, index) => (
                <MenuComponent.Item data-testid={index} key={index}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-lightGray text-darkGray" : "text-darkGray"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {data.label}
                    </button>
                  )}
                </MenuComponent.Item>
              ))}
            </div>
          </MenuComponent.Items>
        </Transition>
      </MenuComponent>
    </div>
  );
};
export default Menu;
