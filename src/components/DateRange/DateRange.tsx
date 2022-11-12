import { DatePicker } from "../DatePicker"
import React from "react"
import { twMerge, twJoin } from "tailwind-merge"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"

export type DateRangeProps = {
	className?: {
		container?: ClassNameValue
		start?: ClassNameValue
		end?: ClassNameValue
	}
	startLabel?: string
	endLabel?: string
	start: string | undefined
	end: string | undefined
	setStart: (e: string) => void
	setEnd: (e: string) => void
}

export const DateRange: React.FC<DateRangeProps> = ({
	className = {},
	startLabel,
	endLabel,
	start,
	end,
	setStart,
	setEnd
}) => {
	return (
		<div className={twJoin(className.container)}>
			<div
				className={twMerge(
					"inline-block p-2.5 [inline-size:260px] [overflow-wrap:break-word]",
					className.start
				)}
			>
				<DatePicker
					label={startLabel}
					value={start}
					onChange={setStart}
					data-testid="start-date"
				></DatePicker>
			</div>
			<div
				className={twMerge(
					"inline-block p-2.5 [inline-size:260px] [overflow-wrap:break-word]",
					className.end
				)}
			>
				<DatePicker
					label={endLabel}
					value={end}
					onChange={setEnd}
					data-testid="end-date"
				></DatePicker>
			</div>
		</div>
	)
}
