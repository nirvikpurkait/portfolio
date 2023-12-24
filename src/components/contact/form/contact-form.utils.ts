import { RegisterOptions } from "react-hook-form";
import { z } from "zod";

export const contactFormSchema = z.object({
	name: z.string(),
	email: z.string(),
	message: z.string(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export function validate(fieldName: keyof ContactFormSchema): RegisterOptions {
	let validationRule: RegisterOptions = {} as RegisterOptions;

	// validation for name field
	if (fieldName === "name") {
		validationRule = {
			required: {
				value: true,
				message: `Name is required`,
			},
		};
	}

	// validation for email field
	if (fieldName === "email") {
		validationRule = {
			required: {
				value: true,
				message: `Email is required`,
			},
			validate: {
				regexValidation: (value: string) => {
					const emailRegex =
						/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

					if (!emailRegex.test(value))
						return `Please enter correct email`;
				},
			},
		};
	}

	// validation for message field
	if (fieldName === "message") {
		validationRule = {
			required: {
				value: true,
				message: `Please enter some message`,
			},
			minLength: {
				message: `Message must be at least 15 character long`,
				value: 15,
			},
			maxLength: {
				message: `Message cannot be more than 120 character long`,
				value: 120,
			},
		};
	}

	return validationRule;
}
