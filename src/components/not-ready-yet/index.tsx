import { cn } from "@/lib/shadcn-ui/utils";
import React from "react";

export default function NotReadyYet() {
  return (
    <div className={cn(`mx-20 my-10 max-w-[40rem] text-2xl`)}>
      This page is <b>Not Ready Yet</b>, please come back later. Thank you for
      your patience.
    </div>
  );
}
