import React from "react";
import Card, { CardProps } from "@/components/project/card/Card";
import { cls } from "@/utils/tailwind/cls";

type ProjectCardListProps = CardProps[];

export default function ProjectCardList(props: ProjectCardListProps) {
	return (
		<div className="@container">
			<div
				className={cls(
					`grid gap-4 grid-cols-1 @lg:grid-cols-2 @3xl:grid-cols-3 @6xl:grid-cols-4`
				)}
			>
				{props.map((card: ProjectCardListProps[number]) => {
					return (
						<Card
							key={card.heading}
							heading={card.heading}
							liveLink={card.liveLink}
							sourceLink={card.sourceLink}
							thumbnailUrl={card.thumbnailUrl}
						/>
					);
				})}
			</div>
		</div>
	);
}
