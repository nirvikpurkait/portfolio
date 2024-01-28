import Contact from "@/components/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Contact",
};

export default function ContactPage() {
	return (
		<>
			<Contact />
		</>
	);
}
