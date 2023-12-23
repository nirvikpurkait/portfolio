import dnsProm from "node:dns/promises";

export async function validateEmail(email: string) {
	const emailRegex =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

	const hostname = email.split("@")[1];

	try {
		if (!emailRegex.test(email)) {
			throw new Error("Email does not match required pattern");
		}

		await dnsProm.resolve(hostname);

		return true;
	} catch (error: any) {
		throw new Error(`'${email}' is not a valid email`, {
			cause: "email-validation-failed",
		});
	}
}
