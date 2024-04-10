"use server";

import {
  ContactFormSchema,
  contactFormSchema,
} from "@/components/contact/form/contact-form.utils";
import { prisma } from "@/database/prisma";
import { id } from "@/lib/id-generator/id";
import { isDisposableEmail, validateEmail } from "@/utils/email";

export type Fail = {
  status: "fail";
  errorField: keyof ContactFormSchema;
  errorMessage: string;
};

export type Success = {
  status: "success";
  data?: any;
};

export type ResponseStatus = Fail | Success;

export async function sendMessage(messageData: ContactFormSchema) {
  let res = {} as ResponseStatus;
  try {
    const result = contactFormSchema.safeParse(messageData);

    if (!result.success) {
      const error = result.error.flatten().fieldErrors;

      // check if required fields are filled or not
      if (error.name && error.name[0].includes("Required")) {
        res = {
          status: "fail",
          errorField: "name",
          errorMessage: "Name is required",
        };

        return res;
      }

      if (error.email && error.email[0].includes("Required")) {
        res = {
          status: "fail",
          errorField: "email",
          errorMessage: "Email is required",
        };

        return res;
      }

      if (error.message && error.message[0].includes("Required")) {
        res = {
          status: "fail",
          errorField: "message",
          errorMessage: "Please provide some message",
        };

        return res;
      }

      // check if fileds are with correct data type or not
      if (error.name && error.name[0].includes("Expected string")) {
        res = {
          status: "fail",
          errorField: "name",
          errorMessage: `Please provide vaild type of data, ${error.name![0]}`,
        };

        return res;
      }

      if (error.email && error.email[0].includes("Expected string")) {
        res = {
          status: "fail",
          errorField: "email",
          errorMessage: `Please provide vaild type of data, ${error.email![0]}`,
        };

        return res;
      }

      if (error.message && error.message[0].includes("Expected string")) {
        res = {
          status: "fail",
          errorField: "message",
          errorMessage: `Please provide vaild type of data, ${error.message![0]}`,
        };

        return res;
      }

      return res;
      /**
       *
       *
       *
       */
    } else {
      const data = result.data;

      // check if email is a valid type
      await validateEmail(data.email);

      // check if the email is disposable email or not
      const disposableEmail = isDisposableEmail(data.email);

      if (disposableEmail) {
        throw new Error(undefined, { cause: "disposable-email" });
      }

      // save the message to database
      const newMessage = await prisma.contactMessage.upsert({
        update: {
          message: data.message,
          createdAt: new Date().toISOString(),
        },
        where: {
          email: data.email,
        },
        create: {
          id: id(),
          email: data.email,
          message: data.message,
          name: data.name,
        },
      });

      res = {
        status: "success",
        data: newMessage,
      };

      return res;
    }
  } catch (error: any) {
    // if email is not a valid type
    if (error.cause === "email-validation-failed") {
      res = {
        status: "fail",
        errorField: "email",
        errorMessage: "Please provide valid type of email",
      };
    }

    // if email is a disposable email
    if (error.cause === "disposable-email") {
      res = {
        status: "fail",
        errorField: "email",
        errorMessage: "Disposable email is not allowed",
      };
    }

    return res;
  }
}
