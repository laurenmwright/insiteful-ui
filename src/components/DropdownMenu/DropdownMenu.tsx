import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDown } from "react-feather";

export type MenuProps = {
  data: {
    label: string;
    link: string;
  }[];
};

export const DropdownMenu = ({ data }: MenuProps) => {
  return (
    <div className="fixed top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-actionBlue bg-opacity-30 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
            <ChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {data.map((data) => (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-lightGray text-white" : "text-gray-900"
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
export default DropdownMenu;






// import { Listbox } from "@headlessui/react";
// import { ChevronDown } from "react-feather";

// export type MenuProps = {
//   onClick?: () => void;
//   data: {
//     label: string;
//     link: string;
//   }[];
// };

// export const DropdownMenu = ({
//   onClick,
//   data
// }: MenuProps) => {
//   return (
//     <div data-testid="div" className={`text-left`}>
//       <Listbox
//         as="div"
//         className="space-y-1 min-w-fit"
//         onClick={onClick!}
//         data-testid="listbox"
//       >
//         <div data-testid="buttonAndOptions" className="relative min-w-fit ">
//           <span className="inline-block min-w-fit w-full rounded-md shadow-sm">
//             <Listbox.Button
//               data-testid="button"
//               className="flex bg-white shadow appearance-none border rounded w-full text-gray-700 leading-tight cursor-default relative w-full py-2 px-3 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:leading-5"
//             >
//               <span className="mr-[25px] block truncate">
//                 {"Options"}
//               </span>
//               <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                 {
//                   <ChevronDown
//                     className="h-5 w-5 text-gray-400"
//                     aria-hidden="true"
//                   />
//                 }
//               </span>
//             </Listbox.Button>
//           </span>
//           <Listbox.Options className="absolute mt-1 min-w-fit max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-actionBlue ring-opacity-5 focus:outline-none sm:text-sm">
//             {data.map((data, index) => (
//               <Listbox.Option
//                 data-testid={index}
//                 key={index}
//                 className={({ active }) =>
//                   `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                     active ? "bg-lightGray text-black" : "text-gray-900"
//                   }`
//                 }
//                 value={data}
//               >
//                 {({ selected }) => (
//                   <>
//                     <span
//                       className={`block truncate ${
//                         selected ? "font-medium" : "font-normal"
//                       }`}
//                     >
//                       {data.label}
//                     </span>
//                   </>
//                 )}
//               </Listbox.Option>
//             ))}
//           </Listbox.Options>
//         </div>
//       </Listbox>
//     </div>
//   );
// };
// export default DropdownMenu;
