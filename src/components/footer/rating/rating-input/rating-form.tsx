"use client";

import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import style from "./rating-ui.module.scss";
import { RatingSchema, validateRatingForm } from "./rating-form.utils";
import toast from "react-hot-toast";
import { cn } from "@/lib/shadcn-ui/utils";
import { addRatingDetails } from "@/app/api/rating/rating.server-action";

export default function RatingForm({
  starAsLabel,
}: {
  starAsLabel: React.ReactNode;
}) {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
    reset,
  } = useForm<RatingSchema>();

  // function to run when the form submits
  const onSubmit = async (formData: RatingSchema) => {
    // change the data type for storing the data
    formData.rating = Number(formData.rating);

    const res = await addRatingDetails(formData);

    if (res?.status === "fail") {
      toast.error(res.message);
    }

    if (res?.status === "success") {
      toast.success(
        `Your rating ${
          (res.type === "add" && "added") ||
          (res.type === "update" && "updated")
        } successfully`
      );
      reset();
    }
  };

  // function to run when the form has errors
  const onError = (errorObj: FieldErrors<RatingSchema>) => {
    if (errorObj.email?.message) toast.error(errorObj.email.message);
    else if (errorObj.rating?.message) toast.error(errorObj.rating.message);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={cn(`flex w-full max-w-2xs flex-col gap-3 font-amaranth`)}
        noValidate
      >
        {/* email field start */}
        <div className={cn(`flex flex-col gap-0.5`)}>
          <label htmlFor="rating-email" className={cn(`text-lg`)}>
            Email:
          </label>
          <input
            type="email"
            id="rating-email"
            {...register("email", validateRatingForm("email"))}
            className={cn(
              `rounded-md bg-black/10 px-4 py-2 focus:outline-none dark:bg-white/20`
            )}
            placeholder="Enter your email"
          />
        </div>
        {/* email field end */}

        <div
          className={cn(`flex flex-wrap items-center justify-between gap-2`)}
        >
          {/* ########## DO NOT CHANGE ID AND VALUE ########## */}
          {/* id and value are different intentionally in field below,
					because of css `~` selector and css `flex direction` combination */}
          <div className="max-w-max">
            <div className={style.rating}>
              <input
                type="radio"
                id="1"
                {...register("rating", validateRatingForm("rating"))}
                value={5}
              />
              <label
                htmlFor="1"
                className="inline-block w-5 text-black/20 dark:text-white/40"
              >
                {starAsLabel}
              </label>
              <input
                type="radio"
                id="2"
                {...register("rating", validateRatingForm("rating"))}
                value={4}
              />
              <label
                htmlFor="2"
                className="inline-block w-5 text-black/20 dark:text-white/40"
              >
                {starAsLabel}
              </label>
              <input
                type="radio"
                id="3"
                {...register("rating", validateRatingForm("rating"))}
                value={3}
              />
              <label
                htmlFor="3"
                className="inline-block w-5 text-black/20 dark:text-white/40"
              >
                {starAsLabel}
              </label>
              <input
                type="radio"
                id="4"
                {...register("rating", validateRatingForm("rating"))}
                value={2}
              />
              <label
                htmlFor="4"
                className="inline-block w-5 text-black/20 dark:text-white/40"
              >
                {starAsLabel}
              </label>
              <input
                type="radio"
                id="5"
                {...register("rating", validateRatingForm("rating"))}
                value={1}
              />
              <label
                htmlFor="5"
                className="inline-block w-5 text-black/20 dark:text-white/40"
              >
                {starAsLabel}
              </label>
            </div>
          </div>
          {/* ########## DO NOT CHANGE ID AND VALUE ########## */}
          {/* id and value are different intentionally in upper field,
					because of css `~` selector and css `flex direction` combination */}

          <button
            type="submit"
            className={cn(
              `rounded-md bg-purple-500 px-4 py-2 text-sm text-white shadow-md shadow-black/30 transition disabled:cursor-not-allowed disabled:opacity-20 dark:shadow-white/20`
            )}
            disabled={!isValid || isSubmitting}
          >
            Add rating
          </button>
        </div>
      </form>
      {/* <Toaster /> */}
    </>
  );
}
