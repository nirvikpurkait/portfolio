import React from "react";
import { DownloadResumeButton, LetsConnect } from "../../custom-components";
import HeroImage from "./hero-image";
import { cn } from "@/lib/shadcn-ui/utils";

export default function Heading() {
  return (
    <div
      className={cn(
        `flex flex-col items-center justify-center gap-4 px-8 pt-8 text-center`
      )}
    >
      <HeroImage />

      <h1>
        <span
          className={cn(
            `font-amaranth text-3xl text-gray-500 dark:text-gray-400 sm:text-4xl`
          )}
        >
          Hi!,&#x1F44B; I&apos;m
        </span>{" "}
        <span className={cn(`font-amaranth text-4xl text-accent sm:text-5xl`)}>
          Nirvik Purkait
        </span>
      </h1>
      <h2
        className={cn(
          `bg-gradient-to-br from-purple-700 to-[#f67e6a] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl`
        )}
      >
        Full-stack developer
      </h2>

      <h3 className={cn(`max-w-lg text-lg sm:text-xl`)}>
        I am a full-stack developer, based in India. My main interest lies on
        back-end development. Currently, I&apos;m living in West Bengal, India.
      </h3>
      <div
        className={cn(
          `flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4`
        )}
      >
        <DownloadResumeButton />
        <LetsConnect />
      </div>
    </div>
  );
}
