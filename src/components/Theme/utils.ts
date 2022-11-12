export interface ITheme {
	[key: string]: string
}

export interface IThemes {
	[key: string]: ITheme
}

export interface IMappedTheme {
	[key: string]: string | null
}

export const mapTheme = (variables: Record<string, string>): any => {
	let newObj: Record<string, string> = {}

	Object.entries(variables).forEach(([key, value]) => {
		newObj[`--color-${key}`] = value
	})

	return newObj
}

export const mapTypographyTheme = (variables: Record<string, string>): any => {
	let newObj: Record<string, string> = {}

	Object.entries(variables).forEach(([key, value]) => {
		newObj[`--${key}`] = value
	})

	return newObj
}

export const applyTheme = (theme: Record<string, string>, isColor: boolean): void => {
	let themeObject: IMappedTheme

	if (!isColor) {
		themeObject = mapTypographyTheme(theme)
	} else {
		themeObject = mapTheme(theme)
	}

	if (!themeObject) return

	const root = document.documentElement

	Object.keys(themeObject).forEach((property) => {
		if (property === "name") {
			return
		}

		root.style.setProperty(property, themeObject[property] || null)
	})
}
export const extend = (extending: ITheme, newTheme: ITheme): ITheme => {
	return { ...extending, ...newTheme }
}
