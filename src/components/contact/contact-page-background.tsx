import { cn } from "@/lib/shadcn-ui/utils";
import Image from "next/image";
import React from "react";

export default function ContactPageBackground() {
  return (
    <div
      aria-hidden
      data-content="background-image"
      className={cn(
        `absolute left-0 top-0 -z-10 h-full w-full overflow-x-clip`
      )}
    >
      <Image
        src={`https://res.cloudinary.com/dpohasqoa/image/upload/v1703221354/portfolio/contact-form-bg-lg.png`}
        alt="image"
        width={1000}
        height={1000}
        className={cn(
          `absolute bottom-0 left-2/4 right-0 top-2/4 -z-10 hidden w-[200rem] -translate-x-2/4 -translate-y-2/4 dark:opacity-20 md:block`
        )}
      />
      <Image
        src={`https://res.cloudinary.com/dpohasqoa/image/upload/v1703221356/portfolio/contact-form-bg-sm.png`}
        alt="image"
        width={1000}
        height={1000}
        className={cn(
          `absolute bottom-0 left-2/4 right-0 top-2/4 -z-10 block w-[200rem] -translate-x-2/4 -translate-y-2/4 dark:opacity-20 md:hidden`
        )}
      />
    </div>
  );
}
