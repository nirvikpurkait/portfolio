import { cn } from "@/lib/utils";
import React from "react";

export default function Heading() {
	return (
		<>
			<h2
				className={cn(
					`text-2xl md:text-4xl underline text-accent mt-4 font-rajdhani font-bold`
				)}
			>
				Projects:-
			</h2>
		</>
	);
}
