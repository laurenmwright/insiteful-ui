import React from "react";
import styles from "./ProgressBar.module.css";

export type ProgressBarProps = {
  percentage?: any;
  numerator?: any;
  denominator?: any;
  overrideColor?: string;
};

export const ProgressBar = ({percentage, numerator, denominator, overrideColor} : ProgressBarProps)=> {
  return (
    <div>
      <div className={styles.border}>
        <progress
          data-testid="progress-bar"
          className={styles.progress}
          style={{backgroundColor: overrideColor}}
          value={percentage ? (percentage/100) : (numerator/denominator)} 
          max={1} 
        />
        <label className={styles.fontSize}>{percentage? ((percentage) + "%") : ((numerator) + "/"+ (denominator))}</label>
      </div>
    </div>
  );
};

export default ProgressBar;
 