"use client";

import React from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { validate, ContactFormSchema } from "./contact-form.utils";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

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
					`relative font-amaranth w-full max-w-sm dark:bg-white/20 bg-black/10 px-8 py-10 rounded-md flex flex-col gap-3.5 backdrop-blur-sm`
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
							`text-black px-3 py-1 text-base sm:text-lg lg:text-xl rounded-md placeholder:text-base`
						)}
						{...register("name", validate("name"))}
					/>
					<p
						className={cn(
							`absolute top-full left-2 text-red-500 text-xs pt-0.5`
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
							`text-black px-3 py-1 text-base sm:text-lg lg:text-xl rounded-md placeholder:text-base`
						)}
						{...register("email", validate("email"))}
					/>
					<p
						className={cn(
							`absolute top-full left-2 text-red-500 text-xs pt-0.5`
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
							`text-black px-3 py-1 text-base sm:text-lg lg:text-xl rounded-md placeholder:text-base`
						)}
						{...register("message", validate("message"))}
					/>
					<p
						className={cn(
							`absolute top-full left-2 text-red-500 text-xs pt-0.5`
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
							`bg-purple-500 px-4 py-2 text-base sm:text-lg lg:text-xl rounded-md ml-auto mt-2 transform duration-150`,
							{
								"bg-purple-500 cursor-not-allowed opacity-25":
									!isValid || isSubmitting,
								"active:scale-95 shadow-md shadow-black/20 dark:shadow-white/20 text-white":
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
