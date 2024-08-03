import Chat from "@/components/chat";
import { cn } from "@/lib/shadcn-ui/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Chat",
};

export default function ChatPage() {
  return (
    <div className={cn(`flex justify-center`)}>
      <Chat />
    </div>
  );
}
