import React from "react";
import blob from "@/assets/blob.svg";
import Image from "next/image";
import style from "./hero-section/hero-section.module.scss";
import { cn } from "@/lib/shadcn-ui/utils";

export default function HeroBackground() {
  return (
    <div
      aria-hidden
      data-content="background-image"
      className={cn(`absolute left-0 top-0 -z-10 h-full w-full`)}
    >
      <Image
        src={blob}
        alt=""
        width={10000}
        height={10000}
        className={cn(
          `absolute left-[45rem] top-[35rem] -translate-x-2/4 -translate-y-2/4 opacity-40 dark:opacity-20`,
          style.rotate
        )}
      />
    </div>
  );
}
