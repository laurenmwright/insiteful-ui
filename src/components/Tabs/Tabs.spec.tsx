import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Tabs, Button, Title } from ".."

const tabData = [
	{ title: "Recent", content: "Does drinking coffee make you smarter?" },
	{ title: "Popular", content: "Is tech making coffee better or worse?" },
	{ title: "Trending", content: "10 answers to your questions about coffee" }
]

const myTest = () => {
	console.log("my test value")
}

test("renders tab titles correctly", () => {
	render(<Tabs tabs={tabData}></Tabs>)

	const tabElement = screen.getByText("Popular")

	expect(tabElement).toBeInTheDocument()
})

test("clicks on third tab to see if content is rendered correctly", () => {
	render(<Tabs tabs={tabData}></Tabs>)

	const title3 = screen.getByText("Trending")

	fireEvent.click(title3)

	const tabElement = screen.getByText("10 answers to your questions about coffee")

	expect(tabElement).toBeInTheDocument()
})

test("content accepts any child", () => {
	const newTabData = [
		{ title: "Title 1", content: 23 },
		{
			title: "Title 2",
			content: (
				<Button onClick={myTest} primary>
					Button
				</Button>
			)
		},
		{ title: "Title 3", content: <Title>Title</Title> }
	]

	render(<Tabs tabs={newTabData}></Tabs>)

	const tabElement = screen.getByText(23)

	expect(tabElement).toBeInTheDocument()

	const title2 = screen.getByText("Title 2")

	fireEvent.click(title2)

	const tabElement2 = screen.getByText(/Button/i)

	expect(tabElement2).toBeInTheDocument()

	const title3 = screen.getByText("Title 3")

	fireEvent.click(title3)

	const tabElement3 = screen.getByText(/Title 3/i)

	expect(tabElement3).toBeInTheDocument()
})
