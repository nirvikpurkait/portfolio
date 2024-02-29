"use client";

import React from "react";
import style from "./download-resume-button.module.scss";
import { cn } from "@/lib/shadcn-ui/utils";

type ButtonProps = React.ComponentProps<"button">;

export default function DownloadResumeButton(props: ButtonProps) {
  async function downloadResume() {
    const a = document.createElement("a");
    a.id = "download";
    a.href = "/api/download-resume";
    a.click();
  }

  return (
    <button
      className={cn(
        `relative border-accent px-4 py-2 text-lg font-bold tracking-wider text-accent after:bg-accent hover:text-white dark:text-white`,
        style.btn,
        props.className
      )}
      onClick={downloadResume}
      {...props}
    >
      Download Resume
    </button>
  );
}
