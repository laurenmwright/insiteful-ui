import { Menu as MenuComponent, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { ChevronDown } from "react-feather"
import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"
import { twMerge } from "tailwind-merge"

import { isClassNameValue } from "../helpers/helpers"

export type MenuProps = {
	/** If a class name value is passed directly, it will apply to the wrapper. */
	className?:
		| ClassNameValue
		| {
				wrapper?: ClassNameValue
				menu?: ClassNameValue
		  }
	title?: string
	anchor?: React.ReactNode
	left?: boolean
	items: {
		label: string
		link?: string
		action?: () => void
		className?: ClassNameValue
	}[]
}

export const Menu: React.FC<MenuProps> = ({ className, title, anchor, left, items }) => {
	if (isClassNameValue(className)) {
		className = {
			wrapper: className
		}
	}

	return (
		<div
			className={twMerge("z-50", left ? "text-left" : "text-right", className.wrapper)}
			data-testid="div"
		>
			{/* + positionLeft? "right-0" : "" */}
			<MenuComponent
				as="div"
				className={twMerge("relative inline-block text-left", className.menu)}
			>
				{anchor ? (
					<MenuComponent.Button className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						{anchor}
					</MenuComponent.Button>
				) : (
					<MenuComponent.Button className="inline-flex w-full justify-center rounded-md bg-action-blue px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						{title}
						<ChevronDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
					</MenuComponent.Button>
				)}
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<MenuComponent.Items
						className={
							left
								? "mw-56 absolute mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
								: "mw-56 right-0 absolute mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
						}
					>
						<div className="px-1 py-1 ">
							{items.map(({ label, action, link, className }, index) => (
								<MenuComponent.Item data-testid={index} key={index}>
									{({ active }) =>
										link ? (
											<a
												className={twMerge(
													"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-darker",
													active && "bg-gray-lightest",
													className
												)}
												href={link}
												onClick={action}
											>
												{label}
											</a>
										) : (
											<button
												className={twMerge(
													"group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-darker",
													active && "bg-gray-lightest",
													className
												)}
												onClick={action}
											>
												{label}
											</button>
										)
									}
								</MenuComponent.Item>
							))}
						</div>
					</MenuComponent.Items>
				</Transition>
			</MenuComponent>
		</div>
	)
}
