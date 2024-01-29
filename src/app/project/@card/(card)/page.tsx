import ProjectCardList from "@/components/project/project-card-list";
import { unstable_noStore as noStore } from "next/cache";
import React from "react";

export default async function CardSlotPage() {
	noStore();
	return <ProjectCardList />;
}
