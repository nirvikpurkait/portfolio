"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { cn } from "@/lib/shadcn-ui/utils";

export default function BackButton() {
  const router = useRouter();

  return (
    <div
      className={cn(
        `mt-8 flex flex-wrap items-center justify-center gap-2 text-2xl`
      )}
    >
      To go back where you belong.{" "}
      <button
        className={cn(
          `rounded-md bg-purple-600 px-4 py-2 text-white transition-all hover:bg-purple-500 active:scale-[1.01] active:bg-purple-700`
        )}
        onClick={() => {
          router.back();
        }}
      >
        Click here
      </button>
    </div>
  );
}
