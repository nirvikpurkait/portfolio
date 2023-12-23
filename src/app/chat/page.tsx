import NotReadyYet from "@/components/not-ready-yet/NotReadyYet";
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
