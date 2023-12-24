"use client";

import { cls } from "@/utils/tailwind/cls";
import React from "react";
import style from "./LetsConnect.module.scss";

type LetsConnectProps = React.ComponentProps<"button">;

export default function LetsConnect(props: LetsConnectProps) {
	const goToChatPage = () => {
		const a = document.createElement("a");
		a.href = "/chat";
		a.target = "_blank";
		a.click();
	};

	return (
		<button
			{...props}
			className={cls(
				`border-accent px-4 py-2 pl-6 relative after:bg-accent text-lg font-bold text-accent dark:text-white hover:text-white tracking-wider`,
				style.btn
			)}
			onClick={goToChatPage}
		>
			Lets connect{" "}
			<sup aria-hidden className={cls(``)}>
				<sup>↗️</sup>
			</sup>
		</button>
	);
}
