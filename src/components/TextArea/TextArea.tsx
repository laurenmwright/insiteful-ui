import React from 'react';
import { Label } from '../Typography';
import styles from './TextArea.module.css';
import classNames from 'classnames';



export type TextAreaProps = {
    label?: string;
    placeholderValue?: string;
  };

export const TextArea = ({ label, placeholderValue }: TextAreaProps) => {
    return (
        
        <div>
            <Label data-testid="TextArea-Label" children={label} />
            <textarea data-testid="TextArea-Native"className={ classNames(styles.textArea) } name="Text Area Test" id="TextArea" placeholder={placeholderValue} />
        </div>
  )};