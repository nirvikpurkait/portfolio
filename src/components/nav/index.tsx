"use client";

import React from "react";
import style from "./nav-ui.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/shadcn-ui/utils";

export type NavbarProps = {
  isAuthorized?: boolean;
};

export default function Navbar(props: NavbarProps) {
  const { isAuthorized = false } = props;
  const pathname = usePathname();
  const firstUrlSegment = pathname.split("/")[1];

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
        <Link href={`/`}>
          <button className={cn(`relative flex items-center justify-center`)}>
            <Image
              src={`/icons/nav/home.svg`}
              alt="home-icon"
              width={100}
              height={100}
              className={cn(
                `relative h-full w-auto bg-accent px-3 py-1 sm:h-auto sm:w-full sm:py-2`,
                { "bg-white": firstUrlSegment === "" }
              )}
            />
            <span
              className={cn(
                `absolute right-0 top-0 hidden w-40 pb-[0.55rem] pl-2 pt-[0.7rem] text-left text-3xl sm:inline-block`,
                { "bg-purple-500": firstUrlSegment === "" }
              )}
            >
              Home
            </span>
          </button>
        </Link>

        <Link href={`/project`}>
          <button className={cn(`relative flex items-center justify-center`)}>
            <Image
              src={`/icons/nav/experience.svg`}
              alt="experience-icon"
              width={100}
              height={100}
              className={cn(
                `relative h-full w-auto bg-accent px-3 py-1 sm:h-auto sm:w-full sm:py-2`,
                { "bg-white": firstUrlSegment === "project" }
              )}
            />
            <span
              className={cn(
                `absolute right-0 top-0 hidden w-40 pb-[0.5rem] pl-2 pt-[0.7rem] text-left text-3xl sm:inline-block`,
                {
                  "bg-purple-500": firstUrlSegment === "project",
                }
              )}
            >
              Project
            </span>
          </button>
        </Link>

        <Link href={`/contact`}>
          <button className={cn(`relative flex items-center justify-center`)}>
            <Image
              src={`/icons/nav/contact.svg`}
              alt="contact-icon"
              width={100}
              height={100}
              className={cn(
                `relative h-full w-auto bg-accent px-3 py-1 sm:h-auto sm:w-full sm:py-2`,
                { "bg-white": firstUrlSegment === "contact" }
              )}
            />
            <span
              className={cn(
                `absolute right-0 top-0 hidden w-40 pb-[0.5rem] pl-2 pt-[0.7rem] text-left text-3xl sm:inline-block`,
                {
                  "bg-purple-500": firstUrlSegment === "contact",
                }
              )}
            >
              Contact
            </span>
          </button>
        </Link>

        {props.isAuthorized && (
          <Link href={`/chat`}>
            <button className={cn(`relative flex items-center justify-center`)}>
              <Image
                src={`/icons/nav/chat.svg`}
                alt="contact-icon"
                width={100}
                height={100}
                className={cn(
                  `relative h-full w-auto bg-accent px-3 py-1 sm:h-auto sm:w-full sm:py-2`,
                  { "bg-white": firstUrlSegment === "chat" }
                )}
              />
              <span
                className={cn(
                  `absolute right-0 top-0 hidden w-40 pb-[0.5rem] pl-2 pt-[0.7rem] text-left text-3xl sm:inline-block`,
                  {
                    "bg-purple-500": firstUrlSegment === "chat",
                  }
                )}
              >
                Chat
              </span>
            </button>
          </Link>
        )}
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
