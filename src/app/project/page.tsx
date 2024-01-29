import Heading from "@/components/project/project-heading";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Project",
};

export default async function ProjectPage() {
	return (
		<>
			<Heading />
		</>
	);
}
