import { cn } from "@/lib/shadcn-ui/utils";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function SignoutButton(
  props: Omit<React.ComponentProps<typeof Link>, "href">
) {
  return (
    <Link
      {...props}
      className={cn(
        `flex w-max items-center justify-center rounded-md bg-white text-white`,
        props.className
      )}
      href={`/sign-in`}
    >
      <span
        className={cn(
          `flex aspect-square w-14 items-center justify-center rounded-bl-md rounded-tl-md border-2 border-r-0 border-gray-300 text-accent`
        )}
      >
        <FontAwesomeIcon
          icon={faRightToBracket}
          className={cn(`w-9 text-4xl`)}
        />
      </span>
      <span
        className={cn(
          `inline-block min-w-40 max-w-60 rounded-br-md rounded-tr-md border-2 border-l-0 border-gray-300 bg-accent p-3 px-6 pt-[13px] text-center text-xl`
        )}
      >
        Sign in
      </span>
    </Link>
  );
}
