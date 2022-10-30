import classNames from "classnames";
import { Loader } from 'react-feather';

export type LoaderProps = {
    overrideColor?: string;
    center?: boolean;
};

export const Load = ({overrideColor, center}: LoaderProps) => {
    return (
        <div>
            <Loader/>
        </div>
    )
}