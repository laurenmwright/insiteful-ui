import React from 'react';
import classNames from 'classnames';
import styles from './Paper.module.css';

export type PaperProps = {
    children?: React.ReactNode | React.ReactNode[];
  };

export const Paper = ({ children }: PaperProps) => {
  return (
  <div data-testid="Paper-Div" className={ classNames(styles.paper)} >
      {children}
  </div>
  )}