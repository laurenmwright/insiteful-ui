import React from "react"
import "../src/components/index.css"
import { ThemeProvider } from "../src/components"

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
}

export const decorators = [
	(Story) => (
		<ThemeProvider>
			<Story />
		</ThemeProvider>
	)
]
