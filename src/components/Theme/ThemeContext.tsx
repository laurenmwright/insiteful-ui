import React, { createContext, useEffect, useState } from "react"
import { applyTheme, mapTypographyTheme } from "./utils";

export const ThemeContext = createContext({
	colorPalette: {},
    changeColorPalette: (colorPaletteVal: {}) => {},
    changeTypographyCatalog: (typographyVal: {}) => {},
    typographyCatalog: {}
})

export type ThemeProviderProps = {
    children: React.ReactNode | React.ReactNode[];
}

export const defaultColorPalette = {
    "primary": "#46A689",
    "dark_gray": "#333333",
    "secondary": "#E0C591",
    "light_gray": "#797B7A",
    "primary_shade_1": "#46575E",
    "primary_shade_2": "#748186",
    "primary_shade_3": "#A3ABAF",
    "secondary_shade_1": "#ECDCBD",
    "secondary_shade_2": "#F6EEDE",
    "secondary_shade_3": "#F9F3E9"
  }; 

  export const defaultCatalog = {
    "common-font": "'Courier New', Courier, monospace",


  }


  

const ThemeProvider: React.FC = ({ children }: ThemeProviderProps) => {
    const [colorPalette, setColorPalette] = useState({});
    const [typographyCatalog, setTypographyCatalog] = useState({});

    const changeTypographyCatalog = (typographyCatalog): void => {
        applyTheme(typographyCatalog, false);
		setTypographyCatalog(typographyCatalog);
    }

	const changeColorPalette = (colorPaletteVal): void => {
        applyTheme(colorPaletteVal, true);
		setColorPalette(colorPaletteVal);
	}

    if(Object.keys(colorPalette).length === 0) {
        changeColorPalette(defaultColorPalette);
    }

    if(Object.keys(typographyCatalog).length === 0) {
        changeTypographyCatalog(defaultCatalog);
    }

	return (
		<ThemeContext.Provider value={{ colorPalette, changeColorPalette, typographyCatalog, changeTypographyCatalog }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider;