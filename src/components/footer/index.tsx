import React from "react";
import SocialIcons from "./social/social-icons";
import Rating from "./rating/rating-input/rating";
import TechStack from "./tech-stack-used/tech-stack";
import Theme from "./theme/theme";
import { cn } from "@/lib/shadcn-ui/utils";
import RatingOutput from "./rating/rating-output/rating-output";
import style from "@/components/footer/footer.module.scss";

export default function Footer() {
  return (
    <div className={cn(``, style.container)}>
      <div
        className={cn(
          `grid gap-x-6 gap-y-10 bg-footer px-6 py-8 @[500px]:px-[10vw]`,
          style.gridTemplateArea
        )}
      >
        <Theme className={cn(``, style.theme)} />
        <Rating className={cn(``, style.ratingInput)} />
        <SocialIcons className={cn(``, style.socialIcons)} />
        <TechStack className={cn(``, style.techStack)} />
        <RatingOutput className={cn(``, style.ratingOutput)} />
      </div>
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
