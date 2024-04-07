import { z } from "zod";
import { RegisterOptions } from "react-hook-form";

export const ratingSchema = z.object({ email: z.string(), rating: z.number() });

export type RatingSchema = z.infer<typeof ratingSchema>;

export function validateRatingForm(field: keyof RatingSchema): RegisterOptions {
	let validationRule: RegisterOptions = {} as RegisterOptions;

	if (field === "email") {
		validationRule = {
			required: {
				message: `Please provide email to save rating`,
				value: true,
			},
			validate: {
				checkEmailRegex: (value: string) => {
					const emailRegex =
						/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
					if (!emailRegex.test(value))
						return "Please provide valid email";
				},
			},
		};
	}

	if (field === "rating") {
		validationRule = {
			required: {
				message: `Please select a rating option`,
				value: true,
			},
		};
	}

	return validationRule;
}
