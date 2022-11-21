import { ClassNameValue } from "tailwind-merge/dist/lib/tw-join"

export function isClassNameValue(
	obj: Record<string, any> | ClassNameValue
): obj is ClassNameValue {
	return !(typeof obj === "object" && !Array.isArray(obj))
}
