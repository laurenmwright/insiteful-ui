import React from "react";
import styles from "./Alert.module.css";
import classNames from "classnames";
import { AlertTriangle, CheckCircle } from 'react-feather';
import { AlertCircle } from 'react-feather';
import { AlertOctagon } from 'react-feather'
import { Label } from "../Typography/Typography";


export type AlertProps = {
  message?: string;
  notification?: boolean;
  success?: boolean;
  error?: boolean;
}

export const Alert = ({
  message, 
  notification,
  success,
  error,
  
}: AlertProps) => {

  return (

    <div data-testid="icontest" className={
        classNames(
          styles.alert,
          { [styles.notification]: notification },
          { [styles.error]: error },
          { [styles.success]: success },)} >
      <div className="flex items-center gap-4">
          {notification ? <AlertCircle data-testid="notification"/> : (success ? <CheckCircle data-testid="success"/> : (error ? <AlertTriangle data-testid="error"/> : <AlertCircle/>))} 
          <div className={styles.message} data-testid="test">
            {message}
          </div>
      </div>
    </div>
  

  )
}

export default Alert;