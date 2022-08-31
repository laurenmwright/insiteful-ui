/// <reference types="react" />
export default function useTheme(): {
    colorPalette: any[];
    setColorPalette: import("react").Dispatch<import("react").SetStateAction<any[]>>;
    typography: undefined;
    setTypography: import("react").Dispatch<import("react").SetStateAction<undefined>>;
    themeLoading: boolean;
    themeError: boolean;
    applyColors: (data: any) => void;
    updatingTheme: boolean;
};
