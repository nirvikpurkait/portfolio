import Contact from "@/components/contact/Contact";
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
