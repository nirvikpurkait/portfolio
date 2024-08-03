import React from "react";
import { Spinner } from "../custom-components/spinner";
import { cn } from "@/lib/shadcn-ui/utils";

export default function ChatSectionLoading() {
  return (
    <div className={cn(`flex items-center justify-center pt-20`)}>
      <Spinner />
    </div>
  );
}
