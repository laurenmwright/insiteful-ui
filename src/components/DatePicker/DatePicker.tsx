import { FormElement } from "../FormElement"
import React, { useCallback } from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

export type DatePickerProps = {
	className?: {
		wrapper?: ClassNameValue
		label?: ClassNameValue
		input?: ClassNameValue
	}

	label?: string | undefined

	value: string | undefined
	onChange: (newValue: string) => void

	"data-testid"?: string | undefined
}

export const DatePicker: React.FC<DatePickerProps> = ({
	className,
	label,
	value,
	onChange,
	"data-testid": testID = "date-picker"
}) => {
	const sendChangedValue = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			onChange(e.target.value)
		},
		[onChange]
	)

	return (
		<FormElement label={label} className={className}>
			<input
				className={twMerge(
					"py-2 px-3 leading-5 w-60 rounded-[0.25rem] border appearance-none shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]",
					className?.input
				)}
				type="date"
				data-testid={testID}
				value={value}
				onChange={sendChangedValue}
			/>
		</FormElement>
	)
}
