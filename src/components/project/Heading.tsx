import { cls } from "@/utils/tailwind/cls";
import React from "react";

export default function Heading() {
	return (
		<>
			<h2
				className={cls(
					`text-2xl md:text-4xl underline text-accent mt-4 font-rajdhani font-bold`
				)}
			>
				Projects:-
			</h2>
		</>
	);
}
