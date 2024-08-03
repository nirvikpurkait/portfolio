import React from "react";
import NotAllowed from "./not-allowed";
import { auth } from "@/lib/next-auth/auth";
import ChatDetails from "./chat-details";

export default async function Chat() {
  const session = await auth();

  if (!session) {
    return <NotAllowed />;
  }

  return <ChatDetails />;
}
