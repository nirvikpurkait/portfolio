import ContactForm from "@/components/contact/form/contact-form";
import ContactPageBackground from "@/components/contact/contact-page-background";
import Intro from "@/components/contact/intro/contact-intro";
import React from "react";
import Info from "./info/public-info";
import { cn } from "@/lib/shadcn-ui/utils";

export default function Contact() {
  return (
    <div className={cn(`@container`)}>
      <div
        className={cn(
          `mt-10 flex flex-col gap-4 gap-y-12 px-8 pb-12 @lg:px-16 @2xl:flex-row @2xl:px-24`
        )}
      >
        <div
          className={cn(`flex basis-full flex-col items-start justify-center`)}
        >
          <Intro />
          <Info />
        </div>
        <div className={cn(`flex basis-full items-center justify-center`)}>
          <ContactForm />
        </div>
        <ContactPageBackground />
      </div>
    </div>
  );
}
