import React, { createContext, useEffect, useState } from "react"
import { applyTheme, mapTypographyTheme } from "./utils";
import { PropsWithChildren } from "react";

export type ThemeProviderProps = PropsWithChildren<{
    children: React.ReactNode;
}>;
export const ThemeContext = createContext({
	colorPalette: {},
    changeColorPalette: (colorPaletteVal: {}) => {},
    changeTypographyCatalog: (typographyVal: {}) => {},
    typographyCatalog: {}
})


export const defaultColorPalette = {
    "primary": "#46A689",
    "secondary": "#E0C591",
    "actionBlue": "#2F77EE",
    "darkestGray": "#1c1917",
    "darkGray": "#292524",
    "mediumGray": "#78716c",
    "lightGray": "#d6d3d1",
    "successLight": "#86CCA4",
    "successDark": "#0E4325",
    "errorLight": "#fca5a5",
    "errorMedium": "#dc2626",
    "errorDark": "#7f1d1d",
    "editorDarkPurple": "#4945FF",
    "editorMediumPurple": "#928fff",
    "editorLightPurple": "#dbdaff",
  }; 

  export const defaultCatalog = {
    "common-font": "'Courier New', Courier, monospace",
  }


  

const ThemeProvider = ({ children }: ThemeProviderProps) => {
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