import { Dialog } from "@headlessui/react";
import classNames from "classnames";
import { X } from 'react-feather';
import { Title } from "../Typography";
import styles from './Modal.module.css';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
  size: "small" | "medium" | "large";  
};

export const Modal = ({ isOpen, onClose, title, children, size}: ModalProps) => {
  var root = document.documentElement;
  root.style.setProperty('--width', size);

  return (
    <div>
      {isOpen && <Dialog data-testid="dialog" as="div" open={isOpen} onClose={onClose} className={ (size==='small' ? classNames(styles.dialogSmall) : size==='medium' ? classNames(styles.dialogMedium) : size==='large' ? classNames(styles.dialogLarge) : classNames(styles.dialogMedium)) }>
        <div>
          <Dialog.Panel data-testid="panel" >
            {/* Class name in 'button' right aligns the X-button */}
            <button data-testid="icon" onClick = {onClose} className={ classNames(styles.buttonIcon)} >
              <X color='red' size={18} />
            </button>
            {title && (
                <Dialog.Title data-testid="title" className={ classNames(styles.title)}> 
                  <Title>{title}</Title>
                </Dialog.Title>
            )}
            {children}
          </Dialog.Panel>
        </div>    
      </Dialog> 
      }
    </div>
  )
}