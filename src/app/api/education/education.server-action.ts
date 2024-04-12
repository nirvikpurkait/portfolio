"use server";

import { prisma } from "@/database/prisma";

export async function education() {
  const educationDetailList = await prisma.education.findMany({
    orderBy: {
      yearOfPassing: "desc",
    },
  });

  return educationDetailList;
}
