import React from "react"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

export type ButtonProps = {
	className?: ClassNameValue
	children?: React.ReactNode
	disabled?: boolean
	primary?: boolean
	secondary?: boolean
	outline?: boolean
	darkFont?: boolean
	simple?: boolean
	overrideFont?: boolean
	overrideColor?: string
	editor?: boolean
	onClick?: () => void
	type?: "button" | "submit" | "reset"
}

export const Button: React.FC<ButtonProps> = ({
	className,
	children,
	disabled,
	primary,
	secondary,
	simple,
	darkFont,
	overrideColor,
	editor,
	outline,
	onClick,
	type
}) => {
	return (
		<button
			data-testid="Button"
			type={type ? type : "button"}
			onClick={onClick!}
			disabled={disabled}
			style={
				simple
					? { color: overrideColor }
					: outline
					? { color: overrideColor, border: "2px solid " + overrideColor }
					: primary
					? { backgroundColor: overrideColor }
					: {}
			}
			className={twMerge(
				"font-semibold rounded-[0.3125rem] py-[0.4375rem] px-[0.625rem] hover:opacity-50 focus:outline-none focus-visible:shadow-sm disabled:opacity-[0.65] disabled:cursor-not-allowed",
				primary &&
					(outline
						? "border-2 border-[var(--color-actionBlue) text-[var(--color-actionBlue)] bg-transparent font-bold"
						: "text-white bg-[var(--color-actionBlue)]"),
				secondary &&
					(outline
						? "border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] bg-transparent"
						: "text-white bg-[var(--color-secondary)]"),
				editor && "text-black bg-[#dbdaff] border-2 border-[#4945ff]",
				darkFont && "!text-[var(--color-darkGray)]",
				simple && "![background:none] !border-none text-[var(--color-mediumGray)]",
				className
			)}
		>
			{children}
		</button>
	)
}
