import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cls(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
