import Heading from "@/components/project/Heading";
import ProjectCardList from "@/components/project/card/ProjectCardList";
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
