import "server-only";
import { cookies } from "next/headers";

/**
 * A function to get cookie values on the server, if no cookies are found return null.
 *
 */
export function getCookieValueOf(cookieName: string) {
  const cookie = cookies().get(cookieName)?.value;

  if (cookie) return cookie;
  return null;
}
