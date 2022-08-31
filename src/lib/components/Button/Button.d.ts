import React from "react";
export declare type ButtonProps = {
    children?: React.ReactNode | React.ReactNode[];
    disabled?: boolean;
    primary?: boolean;
    secondary?: boolean;
    editor?: boolean;
    outline?: boolean;
    twClasses?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};
declare const Button: ({ children, disabled, primary, secondary, editor, outline, twClasses, onClick, type, }: ButtonProps) => JSX.Element;
export default Button;
