import { cn } from "@/lib/utils";
import React from "react";
import ProjectCard from "./project-card";
import { prisma } from "@/database/prisma";

// fetch project list for card from database
async function cardList() {
	return await prisma.projectDetails.findMany();
}

export default async function ProjectCardList() {
	const projectList = await cardList();

	return (
		<div
			className={cn(
				`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-3`
			)}
		>
			{projectList.map((project) => (
				<ProjectCard
					key={project.id}
					heading={project.heading}
					id={project.id}
					imageDescription={project.imageDescription}
					technologies={project.technologies}
					thumbnailImageSource={project.thumbnailImageUrl}
				/>
			))}
		</div>
	);
}
