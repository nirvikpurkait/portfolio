"use server";

import { prisma } from "@/database/prisma";

export async function toolsAndTechnologies() {
  const toolsTech = await prisma.toolsTechnologies.findMany({
    orderBy: {
      order: "asc",
    },
  });

  return toolsTech;
}
