"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { Skeleton } from "../custom-components";
import { cn } from "@/lib/shadcn-ui/utils";

export type ButtonProps = {
  signInButton: React.ReactNode;
  signOutButton: React.ReactNode;
};

export default function Button({ signInButton, signOutButton }: ButtonProps) {
  const { status } = useSession();

  if (status === "loading")
    return <Skeleton className={cn(`h-14 rounded-md`)} />;

  if (status === "authenticated") return <>{signOutButton}</>;

  return <>{signInButton}</>;
}
