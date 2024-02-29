import { cn } from "@/lib/shadcn-ui/utils";
import React from "react";

export default function ProjectLayout({
  children,
  card,
}: {
  children: React.ReactNode;
  card: React.ReactNode;
}) {
  return (
    <div className="w-full @container">
      <div className={cn(`mt-10 px-8 pb-12 @lg:px-16 @2xl:px-24`)}>
        {children}
        {card}
      </div>
    </div>
  );
}
