import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Column } from "react-table";
import { Table } from "../components";
import "regenerator-runtime";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

const columns: Column[] = [
    {
        Header: "User ID",
        accessor: "id",
    },
    {
        Header: "First Name",
        accessor: "fname",
    },
    {
        Header: "Last Name",
        accessor: "lname",
    },
    {
        Header: "Email",
        accessor: "email",
    },
];
const tableRows = [
    { id: "1", fname: "Jenny", lname: "Hagood", email: "jhagood@alabama.us" },
    { id: "2", fname: "Othni", lname: "Lathram", email: "oLathram@alabam.us" },
    { id: "3", fname: "Jane Claire", lname: "Carter", email: "jcarter@alabama.us" },
    { id: "4", fname: "Lauren", lname: "Wright", email: "lauren@insitely.us" }
];

test("renders global filter & table with correct styling", () => {
    const {getByTestId} = render(<Table columns={columns} data={tableRows} />);
    expect(getByTestId("table")).toBeInTheDocument();
    expect(getByTestId("input-box")).toBeInTheDocument();
    expect(getByTestId("t-head")).toHaveClass("bg-gray-50");
    expect(getByTestId("t-body")).toHaveClass("bg-white divide-y divide-gray-200");
});

test("correctly renders data in a table", async () => {
    const {getByTestId} = render(<Table columns={columns} data={tableRows} />);
    expect(getByTestId("t-head")).toHaveTextContent("User ID");
    expect(getByTestId("t-head")).toHaveTextContent("First Name");
    expect(getByTestId("t-head")).toHaveTextContent("Last Name");
    expect(getByTestId("t-head")).toHaveTextContent("Email");
    expect(getByTestId("t-body")).toHaveTextContent("Othni");
    expect(getByTestId("t-body")).toHaveTextContent("Lauren");
    expect(getByTestId("t-body")).toHaveTextContent("Jenny");
    expect(getByTestId("t-body")).toHaveTextContent("Jane Claire");
});

test("global filter value updates & correctly filters a table", async () => {
    const {getByTestId} = render(<Table columns={columns} data={tableRows} />);
    const globalFilter = getByTestId("input-box");
    userEvent.type(globalFilter, "j");
    await waitFor( () => expect(getByTestId("table")).not.toHaveTextContent("Othni"));
    await waitFor( () => expect(getByTestId("table")).not.toHaveTextContent("Lauren"));
    await waitFor( () => expect(getByTestId("table")).toHaveTextContent("Jenny"));
    await waitFor( () => expect(getByTestId("table")).toHaveTextContent("Jane Claire"));
});