import React from "react"
import { act, render, screen } from "@testing-library/react"
import { Column } from "react-table"
import { Table } from "./Table"
import "regenerator-runtime"
import userEvent from "@testing-library/user-event"
import { waitFor } from "@testing-library/react"

const columns: Column[] = [
	{
		Header: "User ID",
		accessor: "id"
	},
	{
		Header: "First Name",
		accessor: "fname"
	},
	{
		Header: "Last Name",
		accessor: "lname"
	},
	{
		Header: "Email",
		accessor: "email"
	}
]
const tableRows = [
	{ id: "1", fname: "Jenny", lname: "Hagood", email: "jhagood@alabama.us" },
	{ id: "2", fname: "Othni", lname: "Lathram", email: "oLathram@alabam.us" },
	{ id: "3", fname: "Jane Claire", lname: "Carter", email: "jcarter@alabama.us" },
	{ id: "4", fname: "Lauren", lname: "Wright", email: "lauren@insitely.us" }
]

test("renders global filter & table with correct styling", () => {
	render(<Table columns={columns} data={tableRows} />)

	expect(screen.getByTestId("table")).toBeInTheDocument()
	expect(screen.getByTestId("input-box")).toBeInTheDocument()
	expect(screen.getByTestId("t-head")).toHaveClass("bg-gray-50")
	expect(screen.getByTestId("t-body")).toHaveClass("bg-white divide-y divide-gray-200")
})

test("correctly renders data in a table", async () => {
	render(<Table columns={columns} data={tableRows} />)

	expect(screen.getByTestId("t-head")).toHaveTextContent("User ID")
	expect(screen.getByTestId("t-head")).toHaveTextContent("First Name")
	expect(screen.getByTestId("t-head")).toHaveTextContent("Last Name")
	expect(screen.getByTestId("t-head")).toHaveTextContent("Email")
	expect(screen.getByTestId("t-body")).toHaveTextContent("Othni")
	expect(screen.getByTestId("t-body")).toHaveTextContent("Lauren")
	expect(screen.getByTestId("t-body")).toHaveTextContent("Jenny")
	expect(screen.getByTestId("t-body")).toHaveTextContent("Jane Claire")
})

test("global filter value updates & correctly filters a table", async () => {
	render(<Table columns={columns} data={tableRows} />)

	const globalFilter = screen.getByTestId("input-box")

	userEvent.type(globalFilter, "j")

	const table = screen.getByTestId("table")

	await Promise.all([
		waitFor(() => expect(table).not.toHaveTextContent("Othni")),
		waitFor(() => expect(table).not.toHaveTextContent("Lauren")),
		waitFor(() => expect(table).toHaveTextContent("Jenny")),
		waitFor(() => expect(table).toHaveTextContent("Jane Claire"))
	])
})
