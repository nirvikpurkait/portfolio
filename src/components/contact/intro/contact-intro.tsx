import { cn } from "@/lib/shadcn-ui/utils";
import React from "react";

export default function Intro() {
  return (
    <div className={cn(`max-w-md`)}>
      <h3 className={cn(`font-amaranth text-3xl sm:text-4xl xl:text-5xl`)}>
        Feel free to contact and reach me
      </h3>
      <br />
      <p className={cn(`font-amaranth text-base sm:text-lg lg:text-xl`)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat
        velit hic id ducimus. Hic, eius sunt! Ipsam, minima ab!
      </p>
    </div>
  );
}
