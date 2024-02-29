import React from "react";
import { FooterHeading } from "..";
import { cn } from "@/lib/shadcn-ui/utils";

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
    <div className={cn(``, props.className)}>
      <FooterHeading>Tech-stack used for this project</FooterHeading>
      <div className={cn(`flex flex-col flex-wrap gap-x-4 text-lg`)}>
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
