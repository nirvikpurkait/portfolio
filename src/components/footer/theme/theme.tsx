import React from "react";
import { FooterHeading } from "..";
import { ThemeSwitchButton } from "./theme-button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/shadcn-ui/utils";

type ThemeProps = React.ComponentProps<"div">;

export default function Theme(props: ThemeProps) {
  return (
    <div {...props}>
      <FooterHeading>Theme</FooterHeading>
      <span className={cn(`flex gap-4`)}>
        <Sun className={cn(`text-yellow-500`)} />
        <ThemeSwitchButton />
        <Moon />
      </span>
    </div>
  );
}
