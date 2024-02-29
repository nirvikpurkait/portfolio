"use client";

import React from "react";
import style from "./lets-connect.module.scss";
import OpenInNewTab from "../open-in-new-tab/open-in-new-tab";
import Link from "next/link";
import { cn } from "@/lib/shadcn-ui/utils";

type LetsConnectProps = React.ComponentProps<"a">;

export default function LetsConnect(props: LetsConnectProps) {
  return (
    <Link
      className={cn(
        `relative flex border-accent px-4 py-2 pl-6 text-lg font-bold tracking-wider text-accent after:bg-accent hover:text-white dark:text-white`,
        style.btn
      )}
      href={`/chat`}
      target="_blank"
    >
      Lets connect <OpenInNewTab />
    </Link>
  );
}
