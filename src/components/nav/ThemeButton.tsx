"use client";

import { cls } from "@/utils/tailwind/cls";
import React, { useState } from "react";

export default function ThemeButton() {
	const [loading, setLoading] = useState(false);

	return (
		<button className={cls(`block w-8`)}>
			<img
				loading="lazy"
				src="https://img.icons8.com/3d-fluency/100/paint-palette.png"
				alt="theme-icon"
			/>
			<span
				className={cls(
					`absolute top-2/4 left-full -translate-y-2/4 text-2xl hidden sm:inline sm:pl-1`
				)}
			>
				Theme
			</span>
		</button>
	);
}
