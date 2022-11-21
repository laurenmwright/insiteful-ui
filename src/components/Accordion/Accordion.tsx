import { Disclosure } from "@headlessui/react"
import React from "react"
import { ChevronUp } from "react-feather"
import { twMerge } from "tailwind-merge"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"

import { isClassNameValue } from "../helpers/helpers"

import { Label } from "../Typography"

export type AccordionProps = {
	/** If a class name value is passed directly, it will apply to the wrapper. */
	className?:
		| ClassNameValue
		| {
				wrapper?: ClassNameValue
				innerWrapper?: ClassNameValue
		  }
	rows: {
		title: string
		content: React.ReactNode
		className?: ClassNameValue
	}[]
}

export const Accordion: React.FC<AccordionProps> = ({ className, rows }) => {
	if (isClassNameValue(className)) {
		className = {
			wrapper: className
		}
	}

	return (
		<div className={twMerge("w-full px-4 pt-16", className.wrapper)}>
			<div className={twMerge("mx-auto w-full rounded-2xl p-2", className.innerWrapper)}>
				{rows.map(({ title, content, className }, index) => (
					<Disclosure key={index}>
						{({ open }) => (
							<>
								<Disclosure.Button className="flex w-full mb-2 justify-between rounded-lg bg-stone-200 px-4 py-2 text-left text-sm font-medium text-stone-900 hover:bg-stone-300 focus:outline-none focus-visible:ring focus-visible:ring-stone-500 focus-visible:ring-opacity-75">
									<Label>{title}</Label>
									<ChevronUp
										className={twMerge(
											"h-5 w-5 text-stone-900",
											open && "transform rotate-180",
											className
										)}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600">
									{content}
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				))}
			</div>
		</div>
	)
}
