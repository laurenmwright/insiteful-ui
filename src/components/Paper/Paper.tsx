import React from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

export type PaperProps = {
	className?: ClassNameValue
	children?: React.ReactNode
}

export const Paper: React.FC<PaperProps> = ({ className, children }) => (
	<div
		data-testid="Paper-Div"
		className={twMerge(
			"w-full relative p-2.5 bg-white break-words border-2 border-white rounded-[0.625rem] shadow-[0px_0px_5px_0px_grey]",
			className
		)}
	>
		{children}
	</div>
)
