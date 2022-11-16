module.exports = {
	plugins: [],
	content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/**/*.{js,jsx,ts,tsx,html}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary, #46A689)",
				secondary: "var(--color-secondary, #E0C591)",
				"gray-lightest": "var(--color-gray-lightest, #d6d3d1)",
				"gray-lighter": "var(--color-gray-lighter, #959595)",
				"gray-light": "var(--color-gray-light, #78716c)",
				"gray-medium": "var(--color-gray-medium, #666)",
				"gray-dark": "var(--color-gray-dark, #333)",
				"gray-darker": "var(--color-gray-darker, #292524)",
				"gray-darkest": "var(--color-gray-darkest, #1c1917)",
				"action-blue": "var(--color-action-blue, #2F77EE)",
				"success-light": "var(--color-success-light, #86CCA4)",
				"success-dark": "var(--color-success-dark, #0E4325)",
				"error-light": "var(--color-error-light, #fca5a5)",
				"error-medium": "var(--color-error-medium, #dc2626)",
				"error-dark": "var(--color-error-dark, #7f1d1d)",
				"editor-dark-purple": "var(--color-editor-dark-purple, #4945FF)",
				"editor-medium-purple": "var(--color-editor-medium-purple, #928fff)",
				"editor-light-purple": "var(--color-editor-light-purple, #dbdaff)"
			},
			fontFamily: {
				mono: `var(--common-font, '"Courier New", Courier, monospace')`
			}
		}
	}
}
