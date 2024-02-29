import { cn } from "@/lib/shadcn-ui/utils";
import Image from "next/image";
import React from "react";

export default function Info() {
  return (
    <div
      className={cn(
        `flex max-w-xs flex-col items-start gap-4 pt-8 font-amaranth tracking-wide`
      )}
    >
      <div className={cn(`flex items-start justify-center`)}>
        <a
          className={cn(`inline-block w-12 pt-1`)}
          href="https://wa.me/+918145149700"
        >
          <Image
            src={`/icons/connect/whatsapp.svg`}
            alt="whatsapp-icon"
            width={100}
            height={100}
            className={cn(`h-full w-auto sm:h-auto sm:w-full`)}
          />
        </a>
        <span className={cn(`pl-4`)}>
          <h4 className={cn(`text-2xl`)}>Whats App</h4>
          <p>+91-81451 49700</p>
        </span>
      </div>

      <div className={cn(`flex max-w-sm items-start justify-center`)}>
        <a
          className={cn(`inline-block w-12 pt-1`)}
          href="mailto:nirvikpurkait@gmail.com"
        >
          <Image
            src={`/icons/connect/gmail.svg`}
            alt="message-icon"
            width={100}
            height={100}
            className={cn(`h-full w-auto sm:h-auto sm:w-full`)}
          />
        </a>
        <span className={cn(`pl-4`)}>
          <h4 className={cn(`text-2xl`)}>E-mail</h4>
          <p>nirvikpurkait@gmail.com</p>
        </span>
      </div>

      <div className={cn(`flex max-w-sm items-start justify-center`)}>
        <span className={cn(`inline-block w-12 pt-1`)}>
          <Image
            src={`/icons/connect/location.svg`}
            alt="location-icon"
            width={100}
            height={100}
            className={cn(`h-full w-auto sm:h-auto sm:w-full`)}
          />
        </span>
        <span className={cn(`pl-4`)}>
          <h4 className={cn(`text-2xl`)}>Address</h4>
          <p>
            South 24 PGS, 743 368, <br /> West Bengal, India
          </p>
        </span>
      </div>
    </div>
  );
}
