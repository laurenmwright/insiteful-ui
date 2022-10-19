import React from 'react';
import { Label, Placeholder } from '../Typography';
import styles from './TextArea.module.css';
import classNames from 'classnames';



export type TextAreaProps = {
    children?: React.ReactNode | React.ReactNode[];
    label?: string;
    placeholderValue?: string;
  };

export const TextArea = ({ label, placeholderValue }: TextAreaProps) => {
    return (
        
        <div className={ classNames(styles.div) }>
            <Label data-testid="TextArea-Label" children={label} />
            <textarea data-testid="TextArea-Native"className={ classNames(styles.textArea) } name="Text Area Test" id="TextArea" placeholder={placeholderValue} />
        </div>
  )};