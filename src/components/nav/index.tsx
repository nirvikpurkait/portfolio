import React from "react";
import style from "./nav-ui.module.scss";
import { cn } from "@/lib/shadcn-ui/utils";
import NavItems from "./nav-items";

export default async function Navbar() {
  return (
    <nav
      className={cn(
        `fixed bottom-0 left-0 z-[999999] h-14 w-screen bg-accent font-rajdhani font-semibold text-white sm:h-screen sm:w-16`,
        style.nav
      )}
    >
      <div
        className={cn(
          `group-ul flex h-full w-full items-center justify-between gap-4 px-4 py-0 sm:flex-col sm:justify-start sm:px-0 sm:py-4`,
          style.navIcon
        )}
      >
        <NavItems />
      </div>
      <div
        className={cn(
          `absolute right-0 top-0 -z-10 h-full w-40 bg-accent`,
          style.textSpace
        )}
      ></div>
    </nav>
  );
}
