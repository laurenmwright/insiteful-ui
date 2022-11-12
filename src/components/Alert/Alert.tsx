import React from "react"
import { AlertTriangle, CheckCircle } from "react-feather"
import { AlertCircle } from "react-feather"
import { twMerge } from "tailwind-merge"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"

export type AlertProps = {
	className?: ClassNameValue
	message?: string | undefined
	notification?: boolean | undefined
	success?: boolean | undefined
	error?: boolean | undefined
}

export const Alert: React.FC<AlertProps> = ({
	className,
	message,
	notification,
	success,
	error
}) => {
	return (
		<div
			data-testid="icontest"
			className={twMerge(
				"p-4 overflow-hidden rounded-sm min-h-[0.0625rem] right-0 min-w-[16rem] border border-l-4 w-fit mt-4 mr-4 z-10 absolute",
				notification &&
					"bg-[var(--color-lightGray)] text-[var(--color-darkGray)] border-[var(--color-darkGray)] h-fit",
				error &&
					"bg-[var(--color-errorLight)] text-[var(--color-errorDark)] border-[var(--color-errorDark)]",
				success &&
					"bg-[var(--color-successLight)] text-[var(--color-successDark)] border-[var(--color-successDark)]",
				className
			)}
		>
			<div className="flex items-center gap-4">
				{notification ? (
					<AlertCircle data-testid="notification" />
				) : success ? (
					<CheckCircle data-testid="success" />
				) : error ? (
					<AlertTriangle data-testid="error" />
				) : (
					<AlertCircle />
				)}
				<div
					className="text-left overflow-hidden max-w-[25rem] max-h-20"
					data-testid="test"
				>
					{message}
				</div>
			</div>
		</div>
	)
}
