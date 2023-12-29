"use client";

import { cls } from "@/utils/tailwind/cls";
import React from "react";
import style from "./LetsConnect.module.scss";
import OpenInNewTab from "../open-in-new-tab/OpenInNewTab";
import Link from "next/link";

type LetsConnectProps = React.ComponentProps<"a">;

export default function LetsConnect(props: LetsConnectProps) {
	return (
		<Link
			className={cls(
				`border-accent px-4 py-2 pl-6 relative after:bg-accent text-lg font-bold text-accent dark:text-white hover:text-white tracking-wider flex`,
				style.btn
			)}
			href={`/chat`}
			target="_blank"
		>
			Lets connect <OpenInNewTab />
		</Link>
	);
}
