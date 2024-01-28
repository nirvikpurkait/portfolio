"use client";

import React from "react";
import style from "./lets-connect.module.scss";
import OpenInNewTab from "../open-in-new-tab/open-in-new-tab";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LetsConnectProps = React.ComponentProps<"a">;

export default function LetsConnect(props: LetsConnectProps) {
	return (
		<Link
			className={cn(
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
