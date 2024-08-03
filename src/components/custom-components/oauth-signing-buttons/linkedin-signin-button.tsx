import { signIn } from "@/lib/next-auth/auth";
import { cn } from "@/lib/shadcn-ui/utils";
import Image from "next/image";
import React from "react";

export default function LinkedInSigninButton(
  props: React.ComponentProps<"button">
) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("linkedin");
      }}
    >
      <button
        {...props}
        className={cn(
          `flex items-center justify-center overflow-hidden rounded-md bg-white text-white`,
          props.className
        )}
        type="submit"
        // onClick={signinWithLinkedIn}
      >
        <span
          className={cn(
            `relative inline-block aspect-square w-14 rounded-bl-md rounded-tl-md border-2 border-r-0 border-gray-300`
          )}
        >
          <Image
            className={cn(`px-2 py-3`)}
            src={`https://authjs.dev/img/providers/linkedin.svg`}
            alt={`Google-image`}
            fill
          />
        </span>
        <span
          className={cn(
            `inline-block w-60 rounded-br-md rounded-tr-md border-2 border-l-0 border-gray-300 bg-[#0a66c2] p-3 px-6 pt-[13px] text-xl`
          )}
        >
          Sign in with LinkedIn
        </span>
      </button>
    </form>
  );
}
