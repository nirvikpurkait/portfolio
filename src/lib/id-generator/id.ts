import { uid } from "uid";

export const id = function (length: number = 24) {
  return uid(length);
};
