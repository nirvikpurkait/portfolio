import React from "react";
import stop from "@/assets/stop.png";
import Image from "next/image";
import { cn } from "@/lib/shadcn-ui/utils";
import GoogleSigninButton from "@/components/custom-components/oauth-signing-buttons/google-signin-button";
import LinkedInSigninButton from "@/components/custom-components/oauth-signing-buttons/linkedin-signin-button";

export default function NotAllowed() {
  return (
    <div className={cn(`py-10`)}>
      <div className={cn(`relative m-auto aspect-square w-48 sm:w-56 md:w-60`)}>
        <Image src={stop} alt="image-for-stop-sign" fill placeholder="blur" />
      </div>
      <div className={cn(`mx-20 my-10 max-w-[40rem] text-2xl`)}>
        To access this content you need to <b>Sign-in</b> first.
      </div>
      <div className={cn(`flex flex-col justify-center gap-4`)}>
        <GoogleSigninButton className={cn(`m-auto`)} />
        <LinkedInSigninButton className={cn(`m-auto`)} />
      </div>
    </div>
  );
}
