import dnsProm from "node:dns/promises";
import mailchecker from "mailchecker";

/**
 * @param
 * @returns `true`
 * @throws
 */
export async function validateEmail(email: string, pattern?: RegExp) {
  const emailRegex =
    pattern ||
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

export function isDisposableEmail(email: string) {
  return !mailchecker.isValid(email);
}
