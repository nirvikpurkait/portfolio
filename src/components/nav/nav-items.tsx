"use client";

import { cn } from "@/lib/shadcn-ui/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathname = usePathname();
  const firstUrlSegment = pathname.split("/")[1];
  return (
    <>
      <Link
        href={`/`}
        className={cn(
          `relative flex h-full w-16 items-center justify-center px-3 py-1 sm:h-14 sm:w-full sm:py-2`
        )}
      >
        <Image
          src={`/icons/nav/home.svg`}
          alt="home-icon"
          className={cn(`absolute bg-accent p-2`, {
            "bg-white": firstUrlSegment === "",
          })}
          fill
        />
        <span
          className={cn(
            `absolute right-0 top-0 hidden w-40 pb-[0.55rem] pl-2 pt-[0.7rem] text-left text-3xl sm:inline-block`,
            { "bg-purple-500": firstUrlSegment === "" }
          )}
        >
          Home
        </span>
      </Link>

      <Link
        href={`/project`}
        className={cn(
          `relative flex h-full w-16 items-center justify-center px-3 py-1 sm:h-14 sm:w-full sm:py-2`
        )}
      >
        <Image
          src={`/icons/nav/experience.svg`}
          alt="home-icon"
          className={cn(`absolute bg-accent p-2`, {
            "bg-white": firstUrlSegment === "project",
          })}
          fill
        />
        <span
          className={cn(
            `absolute right-0 top-0 hidden w-40 pb-[0.55rem] pl-2 pt-[0.7rem] text-left text-3xl sm:inline-block`,
            { "bg-purple-500": firstUrlSegment === "project" }
          )}
        >
          Project
        </span>
      </Link>

      <Link
        href={`/contact`}
        className={cn(
          `relative flex h-full w-16 items-center justify-center px-3 py-1 sm:h-14 sm:w-full sm:py-2`
        )}
      >
        <Image
          src={`/icons/nav/contact.svg`}
          alt="home-icon"
          className={cn(`absolute bg-accent p-2`, {
            "bg-white": firstUrlSegment === "contact",
          })}
          fill
        />
        <span
          className={cn(
            `absolute right-0 top-0 hidden w-40 pb-[0.55rem] pl-2 pt-[0.7rem] text-left text-3xl sm:inline-block`,
            { "bg-purple-500": firstUrlSegment === "contact" }
          )}
        >
          Contact
        </span>
      </Link>
    </>
  );
}
