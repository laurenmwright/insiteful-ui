import { Loader } from 'react-feather';
import styles from './LoadIcon.module.css'
import classNames from "classnames";

export type LoaderProps = {
    overrideColor?: string;
    center?: boolean;
};

export const Load = ({overrideColor, center}: LoaderProps) => {
    return (
        <div data-testid="Div-Style" className={ (center===true ? classNames(styles.centerTrue) : null)}>
            <Loader data-testid="Feather-Icon-Loader" className={`animate-spin ${classNames(styles.spin)}`} color={overrideColor} />
        </div>
    )
}