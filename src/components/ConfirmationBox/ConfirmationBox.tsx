import { Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import Button from "../Button";
import { AlertTriangle } from "react-feather";

export type ConfirmationBoxProps = {
  assetId: string;
  onRemove: (assetId: string) => void;
  removing?: boolean;
  popButton?: string;
  panelText?: string;
};

export function ConfirmationBox({
  assetId,
  onRemove,
  removing,
  popButton,
  panelText,

}: ConfirmationBoxProps) {
  return (
    <Popover>
      <Popover.Button data-testid="popbutton">{popButton}</Popover.Button>
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
          <div className="w-80 transform translate-x-10 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-start relative gap-2 bg-white p-5 ">
              <AlertTriangle size={24} color="#ff605c" />
              <div data-testid="div" className="text-gray-800">
                {panelText}
              </div>
            </div>
            <div className="flex justify-end space-x-2 bg-light-gray p-2 bg-error-red">
              <Button onClick={() => onRemove(assetId)}>
                {removing ? "Removing..." : "Yes"}
              </Button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
export default ConfirmationBox;