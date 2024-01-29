"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

export default function BackButton() {
	const router = useRouter();

	return (
		<div
			className={cn(
				`flex justify-center items-center flex-wrap gap-2 text-2xl mt-8`
			)}
		>
			To go back where you belong.{" "}
			<button
				className={cn(
					`bg-purple-600 px-4 py-2 rounded-md text-white hover:bg-purple-500 transition-all active:bg-purple-700 active:scale-[1.01]`
				)}
				onClick={() => {
					router.back();
				}}
			>
				Click here
			</button>
		</div>
	);
}
