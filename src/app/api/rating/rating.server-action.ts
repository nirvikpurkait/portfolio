"use server";

import {
  RatingSchema,
  ratingSchema,
} from "@/components/footer/rating/rating-form.utils";
import { prisma } from "@/database/prisma";
import { id } from "@/lib/id-generator/id";
import { validateEmail } from "@/utils/email";
import mailchecker from "mailchecker";

type Success = {
  status: "success";
  type: "add" | "update";
  data?: any;
};

type Fail = {
  status: "fail";
  errorField: keyof RatingSchema;
  message: string;
};

export type RatingResponse = Success | Fail;

/**
 * 1. check if provided data is valid with zod
 *  - 1.1. check if fields are empty
 *  - 1.2. check if fields contain invalid type of data
 * 2. check if email domain name is valid
 * 3. check if email is disposable email or not
 */

export async function addRatingDetails(formData: RatingSchema) {
  let res: RatingResponse = {} as RatingResponse;
  try {
    const parsedData = ratingSchema.safeParse(formData);

    // if data parsing failed with zod
    if (!parsedData.success) {
      const error = parsedData.error.flatten().fieldErrors;

      // checking if fields are empty
      if (error.email && error.email![0] === "Required") {
        return (res = {
          status: "fail",
          errorField: "email",
          message: "Email is required.",
        });
      }

      if (error.rating && error.rating![0] === "Required") {
        return (res = {
          status: "fail",
          errorField: "rating",
          message: "Rating is required.",
        });
      }

      // check if valid type of data is provided
      if (error.email && error.email![0] !== "Required") {
        return (res = {
          status: "fail",
          errorField: "email",
          message: `Please provide valid type of data, ${error.email[0]}`,
        });
      }

      if (error.rating && error.rating![0] !== "Required") {
        return (res = {
          status: "fail",
          errorField: "rating",
          message: `Please provide valid type of data, ${error.rating[0]}`,
        });
      }

      /**
       *
       *
       */
    } else {
      const data = parsedData.data;

      // if email domain is not correct throws error
      await validateEmail(data.email);

      const isDisposableEmail = !mailchecker.isValid(data.email);

      if (isDisposableEmail) {
        throw new Error("Disposable email is not allowed", {
          cause: "disposable-email",
        });
      }

      const newData = await prisma.rating.upsert({
        create: {
          email: data.email,
          id: id(),
          rating: data.rating,
        },
        update: {
          rating: data.rating,
          updatedAt: new Date().toISOString(),
        },
        where: {
          email: data.email,
        },
      });

      return (res = {
        status: "success",
        type: newData.updatedAt ? "update" : "add",
        data: newData,
      });
    }
  } catch (error: any) {
    if (error.cause === "email-validation-failed") {
      return (res = {
        status: "fail",
        errorField: "email",
        message: "Please provide valid email",
      });
    }
    if (error.cause === "disposable-email") {
      return (res = {
        status: "fail",
        errorField: "email",
        message: "Disposable email is not allowed",
      });
    }
  }
}
