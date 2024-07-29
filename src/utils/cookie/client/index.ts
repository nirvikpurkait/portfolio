import "client-only";

/**
 * A function to get cookie values on the client, if no cookies are found return null.
 *
 */

export function getCookieValueOf(cookieName: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");

  // loop thorugh the array to find out, if the
  // cookie name matches
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }

  // Return null if the cookie with the given name is not found
  return null;
}
