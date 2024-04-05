"use server";

import { prisma } from "@/database/prisma";
import { unstable_cache } from "next/cache";

export async function toolsAndTechnologies() {
  return await prisma.toolsTechnologies.findMany({
    orderBy: {
      order: "asc",
    },
  });
}

export const cachedToolsAndTechnologiesData = unstable_cache(
  toolsAndTechnologies,
  ["tools-and-technologies"],
  { tags: ["revalidate-tools-and-technologies"] }
);
