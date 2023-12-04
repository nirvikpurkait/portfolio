import React from "react";
import style from "./DownloadResumeButton.module.scss";
import { cls } from "@/utils/tailwind/cls";

type ButtonProps = React.ComponentProps<"button">;

export default function DownloadResumeButton(props: ButtonProps) {
	return (
		<button
			className={cls(
				`border-accent px-4 py-2 relative after:bg-accent text-lg font-bold hover:text-white`,
				style.btn,
				props.className
			)}
			{...props}
		>
			Download Resume
		</button>
	);
}
