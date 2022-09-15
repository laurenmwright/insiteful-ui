import React from "react";
export declare const ThemeContext: React.Context<{
    colorPalette: {};
    changeColorPalette: (colorPaletteVal: {}) => void;
    changeTypographyCatalog: (typographyVal: {}) => void;
    typographyCatalog: {};
}>;
export declare type ThemeProviderProps = {
    children: React.ReactNode | React.ReactNode[];
};
export declare const defaultColorPalette: {
    primary: string;
    dark_gray: string;
    secondary: string;
    light_gray: string;
    primary_shade_1: string;
    primary_shade_2: string;
    primary_shade_3: string;
    secondary_shade_1: string;
    secondary_shade_2: string;
    secondary_shade_3: string;
};
export declare const defaultCatalog: {
    "common-font": string;
};
declare const ThemeProvider: React.FC;
export default ThemeProvider;
