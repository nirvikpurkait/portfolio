import { cn } from "@/lib/shadcn-ui/utils";
import React from "react";
import cryingFace from "@/assets/crying-face.png";
import Image from "next/image";

export default function NotReadyYet() {
  return (
    <div className={cn(`pt-10`)}>
      <Image
        src={cryingFace}
        alt="crying-face"
        className={cn(`m-auto block`)}
        height={200}
        width={200}
        placeholder="blur"
      />
      <div className={cn(`mx-20 my-10 max-w-[40rem] text-2xl`)}>
        This page is <b>Not Ready Yet</b>, please come back later. Sorry for
        your inconvinence.
      </div>
    </div>
  );
}
