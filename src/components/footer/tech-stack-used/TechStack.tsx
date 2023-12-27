import { cls } from "@/utils/tailwind/cls";
import React from "react";
import { FooterHeading } from "../Footer";

export type TechStackProps = React.ComponentProps<"div">;

const technologies: string[] = [
	"Next.js",
	"React JS",
	"MongoDB",
	"Prisma ORM",
	"TypeScript",
	"Tailwind CSS",
	"React Hook Form",
	"React PDF",
];

export default function TechStack(props: TechStackProps) {
	return (
		<div className={cls(``, props.className)}>
			<FooterHeading>Tech-stack used for this project</FooterHeading>
			<div className={cls(`flex flex-col gap-x-4 text-lg flex-wrap`)}>
				{technologies.map((tech) => (
					<span key={tech}>{tech}</span>
				))}
			</div>
		</div>
	);
}
