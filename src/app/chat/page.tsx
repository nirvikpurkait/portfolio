import NotReadyYet from "@/components/not-ready-yet/not-ready-yet";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Chat",
};

export default function ChatPage() {
	return (
		<div>
			<NotReadyYet />
		</div>
	);
}
