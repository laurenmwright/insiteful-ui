import React, { Fragment } from "react"
import { RadioGroup } from "@headlessui/react"
import { Circle } from "react-feather"
import { Label } from "../Typography"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge, twJoin } from "tailwind-merge"

export type RadioButtonGroupProps = {
	className?: {
		wrapper?: ClassNameValue
		label?: ClassNameValue
	}
	label?: string
	onChange?: (active: string) => void
	isSelected?: string
	options: {
		key: string
		text: string
		className?: {
			wrapper?: ClassNameValue
			label?: ClassNameValue
		}
	}[]
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
	className,
	options,
	label,
	isSelected,
	onChange
}) => {
	return (
		<RadioGroup
			value={isSelected}
			onChange={onChange}
			className={twJoin(className?.wrapper)}
		>
			{label && (
				<RadioGroup.Label>
					<Label className={twJoin(className?.label)}>{label}</Label>
				</RadioGroup.Label>
			)}
			{options.map(({ className, key, text }) => (
				<RadioGroup.Option key={key} value={key} as={Fragment}>
					{({ checked }) => (
						<div
							className={twMerge(
								"flex text-base gap-2 m-5 text-gray-light",
								className?.wrapper
							)}
						>
							<span
								data-testid={key}
								className={twJoin(
									checked &&
										"text-action-blue bg-[radial-gradient(circle,var(--color-action-blue,#2F77EE)_40%,white_50%)] rounded-full"
								)}
							>
								<Circle />
							</span>
							<span className={twMerge("text-gray-darker", className?.label)}>
								{text}
							</span>
						</div>
					)}
				</RadioGroup.Option>
			))}
		</RadioGroup>
	)
}
