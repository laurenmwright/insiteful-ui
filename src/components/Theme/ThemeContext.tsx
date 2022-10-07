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
    "secondary": "#E0C591"
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