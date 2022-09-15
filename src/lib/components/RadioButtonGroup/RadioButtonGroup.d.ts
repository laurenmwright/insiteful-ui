/// <reference types="react" />
export declare type RadioProps = {
    label?: string;
    onChange?: (active: string) => void;
    isSelected?: string;
    defaultColor?: string;
    overrideColor?: string;
    data: {
        id: string;
        value: string;
    }[];
};
export declare const RadioButtonGroup: ({ data, label, isSelected, onChange, defaultColor, overrideColor }: RadioProps) => JSX.Element;
export default RadioButtonGroup;
