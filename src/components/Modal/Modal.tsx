import { Dialog } from "@headlessui/react";
import classNames from "classnames";
import { X } from 'react-feather';
import { Heading1 } from "../Typography";
import styles from './Model.module.css';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
};

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
  <div className={ classNames(styles.dialogBox)}>
    <Dialog data-testid="dialog" as="div" className="relative z-10" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 overflow-y-auto flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel data-testid="panel"  className={ classNames(styles.dialogBox) }>
            <span className={classNames(styles.button)}>
            <button data-testid="icon" onClick = {onClose}>
              <X color='red' size={18} />
            </button>
            </span>
            {title && (
              <span className={classNames(styles.header)}>
                <Dialog.Title data-testid="title"> 
                  <Heading1>{title}</Heading1>
                </Dialog.Title>
              </span>
            )}
            {children}
          </Dialog.Panel>
      </div>
    </Dialog>
  </div>
  )}