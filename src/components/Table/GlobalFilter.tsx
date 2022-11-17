import React, { useCallback, useState } from "react"
import { useAsyncDebounce } from "react-table"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

import { Input } from "../Input"

export type GlobalFilterProps = {
	className?: ClassNameValue
	preGlobalFilteredRows?: any

	globalFilter: string
	setGlobalFilter: (newValue: string) => void
}

export const GlobalFilter: React.FC<GlobalFilterProps> = ({
	className,
	globalFilter,
	setGlobalFilter
}) => {
	const [value, setValue] = useState(globalFilter)
	const onChange = useAsyncDebounce(setGlobalFilter, 200)

	const setBoth = useCallback(
		(e: string) => {
			setValue(e)
			onChange(e)
		},
		[onChange]
	)

	return (
		<Input
			type="text"
			value={value}
			onChange={setBoth}
			placeholder="Search"
			className={twMerge("w-60", className)}
		/>
	)
}
