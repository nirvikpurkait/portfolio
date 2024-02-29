"use client";

import React, { useEffect, useRef } from "react";
import style from "./icons-carousel.module.scss";
import { cn } from "@/lib/shadcn-ui/utils";

export default function IconsCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const scrollerContent = Array.from(scrollerRef.current?.children!);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);

      if (duplicatedItem instanceof HTMLLIElement) {
        duplicatedItem.setAttribute("aria-hidden", "true");
      }
      scrollerRef.current?.append(duplicatedItem);
    });
    scrollerRef.current?.parentNode instanceof HTMLDivElement &&
      scrollerRef.current.parentNode.setAttribute("data-animate", "true");
  });

  return (
    <div
      className={cn(
        `m-auto mt-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl`,
        style.scroller
      )}
    >
      <div
        className={cn(
          `px-3 pb-6 text-center text-2xl underline decoration-purple-500 decoration-4 underline-offset-[12px] `
        )}
      >
        Experience in
      </div>
      <ul className={cn(``)} ref={scrollerRef}>
        {children}
      </ul>
    </div>
  );
}
