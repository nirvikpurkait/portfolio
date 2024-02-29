import Image from "next/image";
import React from "react";
import notFound404 from "@/assets/404.svg";
import BackButton from "./back-button";
import { cn } from "@/lib/shadcn-ui/utils";

export default function NotFound() {
  return (
    <div className={cn(`py-20`)}>
      <Image
        src={notFound404}
        alt="404-icon"
        width={100}
        height={100}
        className={cn(`m-auto w-80 md:w-96`)}
      />
      <BackButton />
    </div>
  );
}
