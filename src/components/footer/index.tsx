import React from "react";
import SocialIcons from "./social/social-icons";
import Rating from "./rating/rating";
import style from "./footer-section.module.scss";
import TechStack from "./tech-stack-used/tech-stack";
import Theme from "./theme/theme";
import { cn } from "@/lib/shadcn-ui/utils";

export default function Footer() {
  return (
    <div className={cn(`bg-footer px-6 py-8`, style.footer)}>
      <div className={cn(`flex flex-col gap-4`)}>
        <Rating />
        <SocialIcons />
      </div>
      <TechStack />

      <Theme />
    </div>
  );
}

export function FooterHeading(props: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        `pb-2 font-rajdhani text-xl font-semibold underline underline-offset-6`,
        props.className
      )}
    >
      {props.children}
    </h3>
  );
}
