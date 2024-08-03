"use client";

import { signOut } from "@/lib/next-auth/signing-methods";
import { cn } from "@/lib/shadcn-ui/utils";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SignoutButton(
  props: Omit<React.ComponentProps<"button">, "onClick">
) {
  const signingOut = async () => {
    await signOut();
  };

  return (
    <>
      <button
        {...props}
        className={cn(
          `flex items-center justify-center overflow-hidden rounded-md bg-white text-white`,
          props.className
        )}
        onClick={signingOut}
      >
        <span
          className={cn(
            `relative flex aspect-square w-14 items-center justify-center rounded-bl-md rounded-tl-md border-2 border-r-0 border-gray-300 text-accent`
          )}
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className={cn(`text-4xl`)}
          />
        </span>
        <span
          className={cn(
            `inline-block w-60 rounded-br-md rounded-tr-md border-2 border-l-0 border-gray-300 bg-accent p-3 px-6 pt-[13px] text-xl`
          )}
        >
          Sign out
        </span>
      </button>
    </>
  );
}
