"use client";

import React from "react";
import { useForm } from "react-hook-form";
import style from "./Rating.module.scss";
import { cls } from "@/utils/tailwind/cls";

export default function RatingForm({
	starAsLabel,
}: {
	starAsLabel: React.ReactNode;
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = (data: any) => {
		console.log(data);
		reset();
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={cls(`w-full max-w-2xs flex flex-col gap-3`)}
			>
				{/* email field start */}
				<div className={cls(`flex gap-0.5 flex-col`)}>
					<label htmlFor="rating-email" className={cls(`text-lg`)}>
						Email:
					</label>
					<input
						type="email"
						id="rating-email"
						{...register("email")}
						className={cls(
							`px-4 py-2 bg-black/10 dark:bg-white/20 rounded-md focus:outline-none`
						)}
						placeholder="Enter your email"
					/>
				</div>
				{/* email field end */}

				<div className={cls(`flex items-center`)}>
					{/* ########## DO NOT CHANGE ID AND VALUE ########## */}
					{/* id and value are different intentionally in field below because of css `~` selector and 
						css `flex direction` combination */}
					<div className="max-w-max">
						<div className={style.rating}>
							<input
								type="radio"
								id="1"
								{...register("rating")}
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
								{...register("rating")}
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
								{...register("rating")}
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
								{...register("rating")}
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
								{...register("rating")}
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
					{/* id and value are different intentionally in upper field because of css `~` selector and 
						css `flex direction` combination */}

					<button
						type="submit"
						className={cls(
							`bg-purple-500 ml-auto px-4 py-2 rounded-md text-lg text-white transition shadow-md shadow-black/30 dark:shadow-white/20`,
							{
								"opacity-20 cursor-not-allowed": true,
								"active:scale-95": true,
							}
						)}
					>
						Send
					</button>
				</div>
			</form>
		</>
	);
}
