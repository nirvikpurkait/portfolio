"use server";

import { prisma } from "@/database/prisma";
import { unstable_cache } from "next/cache";

export async function education() {
  return await prisma.education.findMany({
    orderBy: {
      yearOfPassing: "desc",
    },
  });
}

export const cachedEducationData = unstable_cache(education, ["education"], {
  tags: ["revalidate-education"],
});
