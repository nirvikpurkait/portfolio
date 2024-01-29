"use client";

import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import style from "./rating.module.scss";
import { RatingSchema, validateRatingForm } from "./rating-form.utils";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

export default function RatingForm({
	starAsLabel,
}: {
	starAsLabel: React.ReactNode;
}) {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
		reset,
	} = useForm<RatingSchema>();

	// function to run when the form submits
	const onSubmit = async (formData: RatingSchema) => {
		// change the data type for storing the data
		formData.rating = Number(formData.rating);

		// send data to backend
		const res = await fetch("/api/rating", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"content-type": "application/json",
			},
		});

		if (res.status >= 200 && res.status < 300) {
			// rest form after saving data and push toast notification
			reset();
			toast.success(`Rating stored successfully`);
		} else if (res.status >= 400 && res.status < 500) {
			const err = await res.json();
			console.error(err.message);

			toast.error(err.message);
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
				className={cn(
					`w-full max-w-2xs flex flex-col gap-3 font-amaranth`
				)}
				noValidate
			>
				{/* email field start */}
				<div className={cn(`flex gap-0.5 flex-col`)}>
					<label htmlFor="rating-email" className={cn(`text-lg`)}>
						Email:
					</label>
					<input
						type="email"
						id="rating-email"
						{...register("email", validateRatingForm("email"))}
						className={cn(
							`px-4 py-2 bg-black/10 dark:bg-white/20 rounded-md focus:outline-none`
						)}
						placeholder="Enter your email"
					/>
				</div>
				{/* email field end */}

				<div className={cn(`flex items-center`)}>
					{/* ########## DO NOT CHANGE ID AND VALUE ########## */}
					{/* id and value are different intentionally in field below,
					because of css `~` selector and css `flex direction` combination */}
					<div className="max-w-max">
						<div className={style.rating}>
							<input
								type="radio"
								id="1"
								{...register(
									"rating",
									validateRatingForm("rating")
								)}
								value={5}
							/>
							<label
								htmlFor="1"
								className="w-5 inline-block text-black/20 dark:text-white/40"
							>
								{starAsLabel}
							</label>
							<input
								type="radio"
								id="2"
								{...register(
									"rating",
									validateRatingForm("rating")
								)}
								value={4}
							/>
							<label
								htmlFor="2"
								className="w-5 inline-block text-black/20 dark:text-white/40"
							>
								{starAsLabel}
							</label>
							<input
								type="radio"
								id="3"
								{...register(
									"rating",
									validateRatingForm("rating")
								)}
								value={3}
							/>
							<label
								htmlFor="3"
								className="w-5 inline-block text-black/20 dark:text-white/40"
							>
								{starAsLabel}
							</label>
							<input
								type="radio"
								id="4"
								{...register(
									"rating",
									validateRatingForm("rating")
								)}
								value={2}
							/>
							<label
								htmlFor="4"
								className="w-5 inline-block text-black/20 dark:text-white/40"
							>
								{starAsLabel}
							</label>
							<input
								type="radio"
								id="5"
								{...register(
									"rating",
									validateRatingForm("rating")
								)}
								value={1}
							/>
							<label
								htmlFor="5"
								className="w-5 inline-block text-black/20 dark:text-white/40"
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
							`bg-purple-500 ml-auto px-4 py-2 rounded-md text-lg text-white transition shadow-md shadow-black/30 dark:shadow-white/20`,
							{
								"opacity-20 cursor-not-allowed":
									!isValid || isSubmitting,
								"active:scale-95": isValid,
							}
						)}
					>
						Send
					</button>
				</div>
			</form>
			{/* <Toaster /> */}
		</>
	);
}
