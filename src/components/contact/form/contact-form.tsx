"use client";

import React from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { validate, ContactFormSchema } from "./contact-form.utils";
import toast from "react-hot-toast";
import { cn } from "@/lib/shadcn-ui/utils";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>();

  const onSubmit = async (formData: ContactFormSchema) => {
    // do task for submitiing the form data
    try {
      const res = await fetch("/api/contact/send-message", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      //
      if (res.status >= 400 && res.status < 500) {
        const errObj = await res.json();
        throw new Error(errObj.message);
      } else if (res.status >= 200 && res.status < 300) {
        toast.success(`Message sent successfully`);
        reset();
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const onError = async (fieldError: FieldErrors<ContactFormSchema>) => {
    // show a toast message regarding the error
    if (fieldError.name?.message) {
      toast.error(fieldError.name.message);
    } else if (fieldError.email?.message) {
      toast.error(fieldError.email.message);
    } else if (fieldError.message?.message) {
      toast.error(fieldError.message.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={cn(
          `relative flex w-full max-w-sm flex-col gap-3.5 rounded-md bg-black/10 px-8 py-10 font-amaranth backdrop-blur-sm dark:bg-white/20`
        )}
        noValidate
      >
        {/* name input field start */}
        <div className={cn(`relative flex flex-col gap-1`)}>
          <label htmlFor="name" className={cn(`pl-2`)}>
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            className={cn(
              `rounded-md px-3 py-1 text-base text-black placeholder:text-base sm:text-lg lg:text-xl`
            )}
            {...register("name", validate("name"))}
          />
          <p
            className={cn(
              `absolute left-2 top-full pt-0.5 text-xs text-red-500`
            )}
          >
            {errors.name?.message}
          </p>
        </div>
        {/* name input field end */}

        {/* email input field start */}
        <div className={cn(`relative flex flex-col gap-1`)}>
          <label htmlFor="email" className={cn(`pl-2`)}>
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            className={cn(
              `rounded-md px-3 py-1 text-base text-black placeholder:text-base sm:text-lg lg:text-xl`
            )}
            {...register("email", validate("email"))}
          />
          <p
            className={cn(
              `absolute left-2 top-full pt-0.5 text-xs text-red-500`
            )}
          >
            {errors.email?.message}
          </p>
        </div>
        {/* email input field end */}

        {/* message input field start */}
        <div className={cn(`relative flex flex-col gap-1`)}>
          <label htmlFor="message" className={cn(`pl-2`)}>
            Message:
          </label>
          <textarea
            rows={4}
            placeholder="Enter your message"
            id="message"
            className={cn(
              `rounded-md px-3 py-1 text-base text-black placeholder:text-base sm:text-lg lg:text-xl`
            )}
            {...register("message", validate("message"))}
          />
          <p
            className={cn(
              `absolute left-2 top-full pt-0.5 text-xs text-red-500`
            )}
          >
            {errors.message?.message}
          </p>
        </div>
        {/* message input field end */}
        <div className={cn(`relative flex flex-col gap-1`)}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              `ml-auto mt-2 transform rounded-md bg-purple-500 px-4 py-2 text-base duration-150 sm:text-lg lg:text-xl`,
              {
                "cursor-not-allowed bg-purple-500 opacity-25":
                  !isValid || isSubmitting,
                "text-white shadow-md shadow-black/20 active:scale-95 dark:shadow-white/20":
                  isValid && !isSubmitting,
              }
            )}
          >
            Submit
          </button>
        </div>
      </form>

      {/* <Toaster /> */}
    </>
  );
}
