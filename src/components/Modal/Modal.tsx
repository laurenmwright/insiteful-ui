import { Dialog } from "@headlessui/react";
import classNames from "classnames";
import { X } from 'react-feather';
import Button from "../Button";
import { FormElement } from "../FormElement";
import { Toggle } from "../Toggle";
import { Title } from "../Typography";
import styles from './Modal.module.css';

const small = 25;
const medium = 50;
const large = 75;

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
  // size: typeof small | typeof medium | typeof large;
  size: "small" | "medium" | "large";
  // size: number;
  
};





export const Modal = ({ isOpen, onClose, title, children, size}: ModalProps) => {
  //Set 
  var root = document.documentElement;
  root.style.setProperty('--width', size);


  return (
      <div>

      {/* <Dialog data-testid="dialog" as="div" open={isOpen} onClose={onClose} className={ classNames(styles.dialogMedium)}> */}
      {isOpen && <Dialog data-testid="dialog" as="div" open={isOpen} onClose={onClose} className={ (size==='small' ? classNames(styles.dialogSmall) : size==='medium' ? classNames(styles.dialogMedium) : size==='large' ? classNames(styles.dialogLarge) : classNames(styles.dialogMedium)) }>
        <div>

          <Dialog.Panel data-testid="panel" >
            {/* Class name in 'button' right aligns the X-button */}
            <button data-testid="icon" onClick = {onClose} className={ classNames(styles.buttonIcon)} >
              <X color='red' size={18} />
            </button>

            {/* <div className={ classNames(styles.header) }> */}
            {title && (
                <Dialog.Title data-testid="title" className={ classNames(styles.title)}> 
                  <Title>{title}</Title>
                </Dialog.Title>
                
            )}
            {/* </div> */}

            {/* {size} */}
            {children}
            <br></br>
            <Button primary>Button</Button>
            <br></br>
            <FormElement>Form Element</FormElement>
            <br></br>
            <Button secondary>Button 2</Button>
          </Dialog.Panel>
        </div>    
      </Dialog> 
      }
    </div>
  )}