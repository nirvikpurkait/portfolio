import React from "react";
import Button from "./button";
import SigninButton from "../custom-components/oauth-signing-buttons/signin-button";
import SignoutButton from "../custom-components/oauth-signing-buttons/signout-button";
import { cn } from "@/lib/shadcn-ui/utils";

type ConditionalSignInOutButtonProps = React.ComponentProps<"div">;

/**
 * This is a wrapper component for a client component, as the
 * childrens are server component and consist of inline server action
 * we cannot directly import the children on cient component,
 * the children is going to be rendered depending
 * upon if the user is authenticated or not
 */

export default function ConditionalSignInOutButton({
  className,
  ...props
}: ConditionalSignInOutButtonProps) {
  return (
    <div className={cn(``, className)} {...props}>
      <Button
        signInButton={<SigninButton />}
        signOutButton={<SignoutButton />}
      />
    </div>
  );
}
