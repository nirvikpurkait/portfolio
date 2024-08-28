import { projectDetails } from "@/app/api/projects/project.server-action";
import { unstable_cache as cache } from "next/cache";

// assigning string in `const` so that it reduces typo
export const revalidateProjectDetails = "revalidate-project-details";

// cache function to keep this as cache
export const cachedProjectDetails = cache(projectDetails, ["project-details"], {
  tags: [revalidateProjectDetails],
});

// type of cached educaion data
export type TCachedToolsAndTechnologiesData = typeof cachedProjectDetails;
