import { auth } from "@/lib/next-auth/auth";
import { redirect } from "next/navigation";
import React from "react";
import GoogleSigninButton from "../custom-components/oauth-signing-buttons/google-signin-button";
import LinkedInSigninButton from "../custom-components/oauth-signing-buttons/linkedin-signin-button";
import Image from "next/image";
import handshake from "@/assets/hand-shake.png";
import { cn } from "@/lib/shadcn-ui/utils";

export default async function SigninComp() {
  const session = await auth();

  if (session) return redirect("/");

  return (
    <div
      className={cn(
        `mb-10 flex flex-col items-center justify-center gap-2 sm:gap-6 md:gap-12 lg:mb-0 lg:flex-row`
      )}
    >
      <div>
        <Image
          src={handshake}
          alt="handshake-image"
          width={500}
          height={500}
          placeholder="blur"
        />
      </div>
      <div className={cn(`space-y-6`)}>
        <GoogleSigninButton />
        <LinkedInSigninButton />
      </div>
    </div>
  );
}
