import { education } from "@/app/api/education/education.server-action";
import { unstable_cache as cache } from "next/cache";

export const cachedEducationData = cache(education, ["education"], {
  tags: ["revalidate-education"],
});
