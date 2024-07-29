import { education } from "@/app/api/education/education.server-action";
import { unstable_cache as cache } from "next/cache";

// assigning string in `const` so that it reduces typo
export const revalidateEducation = "revalidate-education";

// function to cache the education details
export const cachedEducationData = cache(education, ["education"], {
  tags: [revalidateEducation],
});

// type of cached educaion data
export type TCachedEducationData = typeof cachedEducationData;
