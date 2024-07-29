import { toolsAndTechnologies } from "@/app/api/tools-technologies/tools-technologies.server-action";
import { unstable_cache as cache } from "next/cache";

// assigning string in `const` so that it reduces typo
export const revalidateToolsAndTechnologies =
  "revalidate-tools-and-technologies";

export const cachedToolsAndTechnologiesData = cache(
  toolsAndTechnologies,
  ["tools-and-technologies"],
  { tags: [revalidateToolsAndTechnologies] }
);

// type of cached educaion data
export type TCachedToolsAndTechnologiesData =
  typeof cachedToolsAndTechnologiesData;
