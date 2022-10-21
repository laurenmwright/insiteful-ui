import React from "react";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Table } from "../components";
import { Column } from "react-table";

export default {
  title: "Stories/Components/Table",
  component: Table,
  subcomponents: { Table },
  argTypes: {
    columns: { table: { disable: true } },
    rows: { table: { disable: true } },
  },
} as Meta;

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

export const Default = (args) => {
  return <Table columns={columns} data={tableRows}  />;

};


const columns2: Column[] = [
  {
    Header: "Page ID",
    accessor: "id",
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Route",
    accessor: "route",
  },
  {
    Header: "Layout",
    accessor: "layout",
  },
  {
    Header: "Active?",
    accessor: "isActive",
  },
];
const tableRows2 = [
  { id: "1", title: "Home Page", route: "/", layout:"Content", isActive: "true" },
  { id: "2", title: "Admin Montly", route: "/admin-monthly", layout:"PDF", isActive: "true" },
  { id: "3", title: "Upcoming Proposals", route: "/upcoming-proposals", layout:"PDF", isActive: "true" },
  { id: "4", title: "Archives", route: "/archives", layout:"Table", isActive: "false" },
];

export const SecondsExample = (args) => {
  return <Table columns={columns2} data={tableRows2}  />;

};