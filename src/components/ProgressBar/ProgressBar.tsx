import React from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

import { isClassNameValue } from "../helpers/helpers"

export type ProgressBarProps = {
	/** If a class name value is passed directly, it will apply to the wrapper. */
	className?:
		| ClassNameValue
		| {
				wrapper?: ClassNameValue
				progress?: ClassNameValue
				label?: ClassNameValue
		  }
	percentage?: number
	numerator?: number
	denominator?: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
	className,
	percentage,
	numerator,
	denominator
}) => {
	if (isClassNameValue(className)) {
		className = {
			wrapper: className
		}
	}

	return (
		<div
			className={twMerge(
				"border border-[lightgray] rounded-lg flex items-center px-2.5 py-2",
				className.wrapper
			)}
		>
			<progress
				data-testid="progress-bar"
				className={twMerge(
					"flex-grow appearance-none h-[0.3125rem] pr-1.5 [&::-webkit-progress-value]:bg-action-blue [&::-webkit-progress-bar]:bg-gray-lightest",
					className.progress
				)}
				value={percentage != null ? percentage / 100 : numerator! / denominator!}
				max={1}
			/>
			<label className={twMerge("text-[6pt]", className.label)}>
				{percentage != null ? `${percentage}%` : `${numerator}/${denominator}`}
			</label>
		</div>
	)
}
