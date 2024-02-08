import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

export const options: NextAuthOptions = {
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
};