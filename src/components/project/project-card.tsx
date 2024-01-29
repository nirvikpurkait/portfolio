import { cn } from "@/lib/utils";
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
	const {
		heading,
		technologies,
		thumbnailImageSource,
		imageDescription,
		id,
	} = props;

	return (
		<div
			className={cn(
				`w-full max-w-xs min-h-[2rem] m-auto border-solid border-black border-2 rounded-xl dark:border-white shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] hover:shadow-[8px_8px_0px_0px_#000] hover:dark:shadow-[8px_8px_0px_0px_#fff] transition-all @container px-3 py-4 group`
			)}
		>
			<div
				className={cn(`relative aspect-video rounded-md overflow-clip`)}
			>
				<Image
					src={thumbnailImageSource}
					alt={imageDescription ?? `image for ${heading}`}
					fill
					className={cn(`group-hover:scale-105 transition-all `)}
				/>
			</div>
			<div
				className={cn(
					`text-xl @[230px]:text-2xl @[230px]:leading-[1.2] mt-3`
				)}
			>
				{heading}
			</div>

			<div className={cn(`flex gap-2 flex-wrap mt-4`)}>
				{technologies.map((technology) => (
					<span
						key={technology}
						className={cn(
							`bg-purple-500 text-[12px] text-white px-1 py-0.5 rounded-md`
						)}
					>
						{technology}
					</span>
				))}
			</div>
		</div>
	);
}
