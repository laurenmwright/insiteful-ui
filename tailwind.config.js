module.exports = {
	plugins: [],
	content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/**/*.{js,jsx,ts,tsx,html}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				darkGray: "var(--color-darkGray)",
				mediumGray: "var(--color-mediumGray)",
				lightGray: "var(--color-lightGray)",
				actionBlue: "#2F77EE",
				successLight: "#86CCA4",
				successDark: "#0E4325",
				errorLight: "#FCBABA",
				errorDark: "#5B0000",
				editorDarkPurple: "#4945FF",
				editorMediumPurple: "#928fff",
				editorLightPurple: "#dbdaff"
			}
		}
	}
}
