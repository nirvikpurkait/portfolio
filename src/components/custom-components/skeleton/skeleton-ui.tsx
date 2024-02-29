import React from "react";
import style from "./skeleton-ui.module.scss";
import { cn } from "@/lib/shadcn-ui/utils";

export default function Skeleton(props: { className?: string }) {
  return (
    <div
      className={cn(
        `relative h-10 w-28 rounded-sm bg-black/5 after:bg-white/80 dark:bg-white/60 dark:after:bg-white/90`,
        props.className,
        style.skeleton
      )}
    ></div>
  );
}
