import React from "react"
import { useTable, Column, useGlobalFilter } from "react-table"
import { GlobalFilter } from "./GlobalFilter"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge, twJoin } from "tailwind-merge"
import { isClassNameValue } from "../helpers/helpers"

type TableProps<T extends Record<string, any>> = {
	/** If a class name value is passed directly, it will apply to the wrapper. */
	className?:
		| ClassNameValue
		| {
				wrapper?: ClassNameValue
				table?: ClassNameValue
		  }
	data: T[]
	columns: Column<T>[]
	/** The heading */
	children?: React.ReactNode
}

export function Table<T extends Record<string, any>>({
	className,
	columns,
	data,
	children
}: TableProps<T>) {
	if (isClassNameValue(className)) {
		className = {
			wrapper: className
		}
	}

	// Use the state and functions returned from useTable to build your UI
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		preGlobalFilteredRows,
		setGlobalFilter,
		state: { globalFilter }
	} = useTable<T>(
		{
			columns,
			data
		},
		useGlobalFilter
	)

	// Render the UI for your table
	return (
		<div className={twJoin(className.wrapper)}>
			<div className="flex justify-between pb-1">
				{children}
				<GlobalFilter
					preGlobalFilteredRows={preGlobalFilteredRows}
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>
			</div>
			<table
				data-testid="table"
				className={twMerge(
					"min-w-full divide-y divide-gray-200 border border-gray",
					className.table
				)}
				{...getTableProps()}
			>
				<thead data-testid="t-head" className="bg-gray-50">
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									{...column.getHeaderProps()}
								>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody
					data-testid="t-body"
					className="bg-white divide-y divide-gray-200"
					{...getTableBodyProps()}
				>
					{rows.map((row, i) => {
						prepareRow(row)
						return (
							<tr data-testid={i} {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td
											className="text-left px-6 py-4 whitespace-nowrap"
											{...cell.getCellProps()}
										>
											{cell.render("Cell")}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
