import { Loader } from 'react-feather';
import styles from './LoadIcon.module.css'
import classNames from "classnames";

export type LoaderProps = {
    overrideColor?: string;
    center?: boolean;
};

export const Load = ({overrideColor = "#2F77EE", center}: LoaderProps) => {
    return (
        <div className={ (center===true ? classNames(styles.centerTrue) : null)}>
            <Loader data-testid="Feather-Icon-Loader" className="animate-spin" color={overrideColor} />
        </div>
    )
}