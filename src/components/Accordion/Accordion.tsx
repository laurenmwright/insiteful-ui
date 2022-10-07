import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUp } from "react-feather"

export type AccordionProps = {
  data: {
    title: string,
    content: any
  }[]
};

export const Accordion = ({ data }: AccordionProps) => {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {data.map((data) => (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-lightGray px-4 py-2 text-left text-sm font-medium text-darkGray hover:bg-red-900 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{data.title}</span>
                  <ChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {data.content}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Accordion;












