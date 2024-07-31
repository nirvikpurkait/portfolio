import { NextAuthConfig } from "next-auth";
import LinkedIn from "next-auth/providers/linkedin";
import Google from "next-auth/providers/google";

const config: NextAuthConfig = {
  providers: [LinkedIn, Google],
};

export { config };
