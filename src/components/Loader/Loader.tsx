import React from "react"
import { Loader as FeatherLoader } from "react-feather"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"
import { isClassNameValue } from "../helpers/helpers"

export type LoaderProps = {
	/** If a class name value is passed directly, it will apply to the wrapper. */
	className?:
		| ClassNameValue
		| {
				wrapper?: ClassNameValue
				loader?: ClassNameValue
		  }
	color?: string
	center?: boolean
}

export const Loader: React.FC<LoaderProps> = ({ color, center, className }) => {
	if (isClassNameValue(className)) {
		className = {
			wrapper: className
		}
	}

	return (
		<div
			data-testid="Div-Style"
			className={twMerge(center && "absolute top-1/2 left-1/2", className.wrapper)}
		>
			<FeatherLoader
				data-testid="Feather-Icon-Loader"
				className={twMerge("animate-spin text-action-blue", className.loader)}
				color={color}
			/>
		</div>
	)
}
