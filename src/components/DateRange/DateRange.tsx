import { DatePicker } from "../DatePicker"
import React from "react"
import { twMerge, twJoin } from "tailwind-merge"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { isClassNameValue } from "../helpers/helpers"
import { DatePickerProps } from "../DatePicker/DatePicker"

export type DateRangeProps = {
	/** If a class name value is passed directly, it will apply to the wrapper. */
	className?:
		| ClassNameValue
		| {
				wrapper?: ClassNameValue
				/** If a class name value is passed directly, it will apply to the wrapper. */
				start?:
					| ClassNameValue
					| {
							wrapper?: ClassNameValue
							picker?: DatePickerProps["className"]
					  }
				/** If a class name value is passed directly, it will apply to the wrapper. */
				end?:
					| ClassNameValue
					| {
							wrapper?: ClassNameValue
							picker?: DatePickerProps["className"]
					  }
		  }
	startLabel?: string
	endLabel?: string
	start: string | undefined
	end: string | undefined
	setStart: (e: string) => void
	setEnd: (e: string) => void
}

export const DateRange: React.FC<DateRangeProps> = ({
	className,
	startLabel,
	endLabel,
	start,
	end,
	setStart,
	setEnd
}) => {
	if (isClassNameValue(className)) {
		className = {
			wrapper: className
		}
	}

	if (isClassNameValue(className.start)) {
		className.start = {
			wrapper: className.start
		}
	}

	if (isClassNameValue(className.end)) {
		className.end = {
			wrapper: className.end
		}
	}

	return (
		<div className={twJoin(className.wrapper)}>
			<div
				className={twMerge(
					"inline-block p-2.5 [inline-size:260px] [overflow-wrap:break-word]",
					className.start.wrapper
				)}
			>
				<DatePicker
					label={startLabel}
					value={start}
					onChange={setStart}
					data-testid="start-date"
					className={className.start.picker}
				/>
			</div>
			<div
				className={twMerge(
					"inline-block p-2.5 [inline-size:260px] [overflow-wrap:break-word]",
					className.end.wrapper
				)}
			>
				<DatePicker
					label={endLabel}
					value={end}
					onChange={setEnd}
					data-testid="end-date"
					className={className.end.picker}
				/>
			</div>
		</div>
	)
}
