import React, { createContext, useState } from "react"
import { applyTheme } from "./utils"

export type ThemeProviderProps = {
	children?: React.ReactNode
}

export const ThemeContext = createContext({
	colorPalette: {} as Record<string, string>,
	changeColorPalette: (colorPaletteVal: Record<string, string>) => {},
	changeTypographyCatalog: (typographyVal: Record<string, string>) => {},
	typographyCatalog: {} as Record<string, string>
})

export const defaultColorPalette = {
	primary: "#46A689",
	secondary: "#E0C591",
	"gray-lightest": "#d6d3d1",
	"gray-lighter": "#959595",
	"gray-light": "#78716c",
	"gray-medium": "#666",
	"gray-dark": "#333",
	"gray-darker": "#292524",
	"gray-darkest": "#1c1917",
	"action-blue": "#2F77EE",
	"success-light": "#86CCA4",
	"success-dark": "#0E4325",
	"error-light": "#fca5a5",
	"error-medium": "#dc2626",
	"error-dark": "#7f1d1d",
	"editor-dark-purple": "#4945FF",
	"editor-medium-purple": "#928fff",
	"editor-light-purple": "#dbdaff"
}

export const defaultCatalog = {
	"common-font": "'Courier New', Courier, monospace"
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [colorPalette, setColorPalette] = useState({})
	const [typographyCatalog, setTypographyCatalog] = useState({})

	const changeTypographyCatalog = (typographyCatalog: Record<string, string>): void => {
		applyTheme(typographyCatalog, false)
		setTypographyCatalog(typographyCatalog)
	}

	const changeColorPalette = (colorPaletteVal: Record<string, string>): void => {
		applyTheme(colorPaletteVal, true)
		setColorPalette(colorPaletteVal)
	}

	if (Object.keys(colorPalette).length === 0) {
		changeColorPalette(defaultColorPalette)
	}

	if (Object.keys(typographyCatalog).length === 0) {
		changeTypographyCatalog(defaultCatalog)
	}

	return (
		<ThemeContext.Provider
			value={{
				colorPalette,
				changeColorPalette,
				typographyCatalog,
				changeTypographyCatalog
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
