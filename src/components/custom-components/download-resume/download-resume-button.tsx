"use client";

import React from "react";
import style from "./download-resume-button.module.scss";
import { cn } from "@/lib/utils";

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
			className={cn(
				`border-accent px-4 py-2 relative after:bg-accent text-lg font-bold text-accent dark:text-white hover:text-white tracking-wider`,
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
