import { cn } from "@/lib/shadcn-ui/utils";
import React from "react";
import ProjectCard from "./project-card";
import { prisma } from "@/database/prisma";

// fetch project list for card from database
async function cardList() {
  return await prisma.projectDetails.findMany({
    include: {
      technologiesUsed: {
        select: { skill: true },
      },
    },
  });
}

export default async function ProjectCardList() {
  // fetch project card list data from server
  const projectListFormServer = await cardList();

  // format them as needed for the component
  const projectList = projectListFormServer.map((eachProject) => {
    const {
      id,
      description,
      heading,
      imageDescription,
      liveLink,
      sourceLink,
      thumbnailImageUrl,
      technologiesUsed,
    } = eachProject;
    return {
      id,
      description,
      heading,
      imageDescription,
      liveLink,
      sourceLink,
      thumbnailImageUrl,
      technologiesUsed: technologiesUsed.map((eachTech) => eachTech.skill),
    };
  });

  return (
    <div
      className={cn(
        `grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-3`
      )}
    >
      {projectList.map((project) => (
        <ProjectCard
          key={project.id}
          heading={project.heading}
          id={project.id}
          imageDescription={project.imageDescription}
          technologies={project.technologiesUsed}
          thumbnailImageSource={project.thumbnailImageUrl}
        />
      ))}
    </div>
  );
}
