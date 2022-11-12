import { twMerge } from "tailwind-merge"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"

import { FormElement } from "../FormElement"

export type DateTimePickerProps = {
	className?: {
		wrapper?: ClassNameValue | undefined
		label?: ClassNameValue | undefined
		input?: ClassNameValue | undefined
	}
	label?: string | undefined
	value?: string | undefined
	onChange?: ((newValue: string) => void) | undefined
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
	className,
	label,
	value,
	onChange
}) => {
	return (
		<FormElement label={label} className={className}>
			<input
				type="datetime-local"
				data-testid="date-time-picker"
				value={value}
				className={twMerge(
					"py-2 px-3 leading-tight w-56 rounded border appearance-none",
					className?.input
				)}
				onChange={(e) => onChange?.(e.target.value)}
			/>
		</FormElement>
	)
}
