import { cn } from "@/lib/shadcn-ui/utils";
import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  id: string;
  heading: string;
  thumbnailImageSource: string;
  technologies: string[];
  imageDescription: string | null;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { heading, technologies, thumbnailImageSource, imageDescription, id } =
    props;

  return (
    <div
      className={cn(
        `group m-auto min-h-[2rem] w-full max-w-xs rounded-xl border-2 border-solid border-black px-3 py-4 shadow-[5px_5px_0px_0px_#000] transition-all @container hover:shadow-[8px_8px_0px_0px_#000] dark:border-white dark:shadow-[5px_5px_0px_0px_#fff] hover:dark:shadow-[8px_8px_0px_0px_#fff]`
      )}
    >
      <div className={cn(`relative aspect-video overflow-clip rounded-md`)}>
        <Image
          src={thumbnailImageSource}
          alt={imageDescription ?? `image for ${heading}`}
          fill
          className={cn(`transition-all group-hover:scale-105 `)}
        />
      </div>
      <div
        className={cn(`mt-3 text-xl @[230px]:text-2xl @[230px]:leading-[1.2]`)}
      >
        {heading}
      </div>

      <div className={cn(`mt-4 flex flex-wrap gap-2`)}>
        {technologies.map((technology) => (
          <span
            key={technology}
            className={cn(
              `rounded-md bg-purple-500 px-1 py-0.5 text-[12px] text-white`
            )}
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}
