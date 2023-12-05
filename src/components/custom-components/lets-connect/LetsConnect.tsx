import { cls } from "@/utils/tailwind/cls";
import React from "react";
import style from "./LetsConnect.module.scss";

type LetsConnectProps = React.ComponentProps<"button">;

export default function LetsConnect(props: LetsConnectProps) {
	return (
		<button
			{...props}
			className={cls(
				`border-accent px-4 py-2 relative after:bg-accent text-lg font-bold hover:text-gray-800`,
				style.btn
			)}
		>
			Lets connect
		</button>
	);
}
