import { uid } from "uid";

/**
 * Function to generate an `id` of `n` character.
 * ___
 * @param `length` (optional), defaults to 24.
 */

export const id = function (length: number = 24) {
  return uid(length);
};
