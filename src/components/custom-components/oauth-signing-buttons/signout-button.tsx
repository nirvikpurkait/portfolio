import { signOut } from "@/lib/next-auth/auth";
import { cn } from "@/lib/shadcn-ui/utils";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SignoutButton(props: React.ComponentProps<"button">) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        {...props}
        className={cn(
          `flex w-max items-center justify-center rounded-md bg-white text-white`,
          props.className
        )}
        type="submit"
      >
        <span
          className={cn(
            `flex aspect-square w-14 items-center justify-center rounded-bl-md rounded-tl-md border-2 border-r-0 border-gray-300 text-accent`
          )}
        >
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className={cn(`w-9 text-4xl`)}
          />
        </span>
        <span
          className={cn(
            `inline-block min-w-40 max-w-60 rounded-br-md rounded-tr-md border-2 border-l-0 border-gray-300 bg-accent p-3 px-6 pt-[13px] text-center text-xl`
          )}
        >
          Sign out
        </span>
      </button>
    </form>
  );
}
