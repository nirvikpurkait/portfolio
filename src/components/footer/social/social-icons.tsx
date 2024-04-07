import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FooterHeading } from "..";
import { cn } from "@/lib/shadcn-ui/utils";

export type SocialIconsProps = React.ComponentProps<"div">;

export default function SocialIcons(props: SocialIconsProps) {
  return (
    <div {...props}>
      <FooterHeading>Follow me</FooterHeading>
      <div className={cn(`flex w-max gap-2`)}>
        <Link
          href={`https://facebook.com/nirvikpurkait`}
          target="_blank"
          className={cn(`inline-block max-w-[30px] md:max-w-[35px]`)}
        >
          <Image
            src={`/icons/connect/facebook.svg`}
            alt="facebook-icon"
            width={100}
            height={100}
          />
        </Link>

        <Link
          href={`https://github.com/nirvikpurkait`}
          target="_blank"
          className={cn(`inline-block max-w-[30px] md:max-w-[35px]`)}
        >
          <Image
            src={`/icons/connect/github.svg`}
            alt="github-icon"
            width={100}
            height={100}
          />
        </Link>

        <Link
          href={`https://www.linkedin.com/in/nirvikpurkait/`}
          target="_blank"
          className={cn(`inline-block max-w-[30px] md:max-w-[35px]`)}
        >
          <Image
            src={`/icons/connect/linkedin.svg`}
            alt="linked-in-icon"
            width={100}
            height={100}
          />
        </Link>

        <Link
          href={`https://wa.me/+918145149700`}
          target="_blank"
          className={cn(`inline-block max-w-[30px] md:max-w-[35px]`)}
        >
          <Image
            src={`/icons/connect/whatsapp.svg`}
            alt="whats-app-icon"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
}
