import { cn } from "@/lib/shadcn-ui/utils";
import React from "react";

export default function Heading() {
  return (
    <>
      <h2
        className={cn(
          `mt-4 font-rajdhani text-2xl font-bold text-accent underline md:text-4xl`
        )}
      >
        Projects:-
      </h2>
    </>
  );
}
