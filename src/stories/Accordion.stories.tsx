import React from "react"
import { Meta } from "@storybook/react"
import { Accordion } from "../components"

export default {
	title: "Stories/Components/Accordion",
	component: Accordion,
	argTypes: {
		width: {
			control: { type: "number", max: 100, min: 10, step: 1 }
		}
	}
} as Meta

export const Default = (args) => (
	<div style={{ width: args.width + "%" }}>
		<Accordion rows={args.data} />
	</div>
)
const defaultText =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum ante sed nulla rutrum consequat. Aliquam lacus sapien, commodo et leo eu, dictum posuere enim. Suspendisse eget euismod nibh. Pellentesque iaculis condimentum tellus. Nulla ullamcorper ipsum at magna consectetur, tempor laoreet velit scelerisque. Quisque lobortis, quam nec tempus semper, massa sem ornare neque, eget consequat orci ante sed neque. Nunc tincidunt molestie diam a fermentum. Aenean vehicula commodo nisl. Sed tincidunt leo ut nunc pretium tempor. Mauris vel dapibus urna, quis rhoncus turpis. Nam nec enim ut augue porta posuere. Etiam ultrices ultricies dolor id mattis."
Default.args = {
	data: [
		{ title: "Title 1", content: defaultText },
		{ title: "Title 2", content: defaultText },
		{ title: "Title 3", content: defaultText }
	]
}
