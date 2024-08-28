"use server";

import { prisma } from "@/database/prisma";

export async function projectDetails() {
  const projectList = await prisma.projectDetails.findMany({
    include: {
      technologiesUsed: {
        select: { skill: true },
      },
    },
  });

  return projectList;
}
