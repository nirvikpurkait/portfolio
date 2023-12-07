"use client";

import React from "react";
import style from "./DownloadResumeButton.module.scss";
import { cls } from "@/utils/tailwind/cls";

type ButtonProps = React.ComponentProps<"button">;

export default function DownloadResumeButton(props: ButtonProps) {
	async function downloadResume() {
		const a = document.createElement("a");
		a.id = "download";
		a.href = "/api/download-resume";
		a.click();
	}

	return (
		<button
			className={cls(
				`border-accent px-4 py-2 relative after:bg-accent text-lg font-bold hover:text-gray-800`,
				style.btn,
				props.className
			)}
			onClick={downloadResume}
			{...props}
		>
			Download Resume
		</button>
	);
}
