import { Dialog } from "@headlessui/react";
import { X } from 'react-feather';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
  closeFunction: () => void;
};

export const Modal = ({ isOpen, onClose, title, children, closeFunction }: ModalProps) => {
  return (
  <div>
    <Dialog data-testid="dialog" as="div" className="relative z-10" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 overflow-y-auto flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel data-testid="panel" className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <button data-testid="icon" onClick = {closeFunction}className=" float-right p-0">
              <X color='red' size={18} />
            </button>
            {title && (
              <Dialog.Title data-testid="title" aria-labelledby="Div-Main"> 
                {title}
              </Dialog.Title>
            )}
            {children}
          </Dialog.Panel>
      </div>
    </Dialog>
  </div>
  )}