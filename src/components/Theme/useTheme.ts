import { useState } from "react"
import { applyTheme } from "./utils"

export function useTheme() {
	const [colorPalette, setColorPalette] = useState<any[]>([])
	const [updatingTheme] = useState(false)
	const [typography, setTypography] = useState()
	const [themeLoading] = useState(true)
	const [themeError] = useState(false)

	const applyColors = (data: Record<string, string>) => {
		// setColorPalette(data);
		applyTheme(data, true)
	}

	return {
		colorPalette,
		setColorPalette,
		typography,
		setTypography,
		themeLoading,
		themeError,
		applyColors,
		updatingTheme
	}
}
