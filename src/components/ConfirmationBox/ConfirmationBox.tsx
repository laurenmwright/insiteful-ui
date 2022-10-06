import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { AlertTriangle } from "react-feather";
import Button from "../Button"
import classNames from "classnames";

export type ConfirmPopoverProps = {
  onCancel?: () => void;
  onConfirm?: () => void;
  popButton?: string;
  panelText?: string;
};



export function ConfirmationBox({
  onCancel,
  onConfirm,
  popButton,
  panelText,

}: ConfirmPopoverProps) {
  return (
    <Popover>
      <Popover.Button  data-testid="popbutton">{popButton}</Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel data-testid="panel" className="absolute z-1000 px-4 mt-3  transform -translate-x-96 -translate-y-24 sm:px-0 lg:max-w-3xl">
      
          <div className="w-80 shadow-lg rounded-md border-solid border-2">
            <div className="flex items-center justify-start relative gap-2 bg-white p-5 ">
              <AlertTriangle size={24} color="#ff605c" />
              <div data-testid="div" className="text-gray-800">
                {panelText}
              </div>
            </div>
            <div className="flex justify-end space-x-2 bg-light-gray p-2 bg-error-red">
              <span className="bg-green-200" data-testid="yes">
                <Button onClick={onConfirm}>
                Yes
              </Button>
              </span>
              <span className="bg-gray-200">
              <Button onClick={onCancel} data-testid="no">
                No
              </Button>
              </span>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
export default ConfirmationBox;