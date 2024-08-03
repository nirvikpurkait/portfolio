import { cn } from "@/lib/shadcn-ui/utils";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Spinner() {
  return (
    <div className={cn(`h-14 w-14 animate-spin`)}>
      <FontAwesomeIcon icon={faCircleNotch} className={cn(`text-accent`)} />
    </div>
  );
}
