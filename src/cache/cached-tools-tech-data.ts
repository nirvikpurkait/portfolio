import { toolsAndTechnologies } from "@/app/api/tools-technologies/tools-technologies.server-action";
import { unstable_cache as cache } from "next/cache";

export const cachedToolsAndTechnologiesData = cache(
  toolsAndTechnologies,
  ["tools-and-technologies"],
  { tags: ["revalidate-tools-and-technologies"] }
);
