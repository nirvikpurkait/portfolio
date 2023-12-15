import { cls } from "@/utils/tailwind/cls";
import React from "react";
import { Rajdhani } from "@next/font/google";

const rajdhaniFont = Rajdhani({
	weight: "700",
	subsets: ["devanagari"],
	display: "swap",
});

export default function Heading() {
	return (
		<>
			<h2
				className={cls(
					`text-2xl md:text-4xl underline text-accent mt-4`,
					rajdhaniFont.className
				)}
			>
				Projects:-
			</h2>
		</>
	);
}
