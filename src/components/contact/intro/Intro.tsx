import { cls } from "@/utils/tailwind/cls";
import React from "react";

export default function Intro() {
	return (
		<div className={cls(`max-w-md`)}>
			<h3
				className={cls(
					`font-amaranth text-3xl sm:text-4xl xl:text-5xl`
				)}
			>
				Feel free to contact and reach me
			</h3>
			<br />
			<p className={cls(`text-base sm:text-lg lg:text-xl font-amaranth`)}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
				quaerat velit hic id ducimus. Hic, eius sunt! Ipsam, minima ab!
			</p>
		</div>
	);
}
