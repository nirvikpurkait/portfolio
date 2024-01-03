import React from "react";
import Card, { CardProps } from "@/components/project/card/Card";
import { prisma } from "@/database/prisma";

async function getProjectPageCardDetails(): Promise<CardProps[]> {
	await new Promise((res) => setTimeout(res, 3000));
	const projectDetails = await prisma.projectDetails.findMany();

	return projectDetails.map((detils) => {
		const {
			heading,
			description,
			imageDescription,
			id,
			liveLink,
			sourceLink,
			thumbnailImageUrl,
		} = detils;
		return {
			heading,
			id,
			liveLink,
			sourceLink,
			thumbnailImageUrl,
			description: description ?? undefined,
			imageDescription: imageDescription ?? undefined,
		};
	});
}

export default async function ProjectCardList() {
	const cards = await getProjectPageCardDetails();

	return (
		<div className=" pt-8 grid gap-4 grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3">
			{cards.map((card) => {
				return (
					<Card
						heading={card.heading}
						id={card.id}
						liveLink={card.liveLink}
						sourceLink={card.sourceLink}
						thumbnailImageUrl={card.thumbnailImageUrl}
						description={card.description}
						imageDescription={card.imageDescription}
						key={card.id}
					/>
				);
			})}
		</div>
	);
}
