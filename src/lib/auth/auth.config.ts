import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const config: NextAuthConfig = {
	providers: [Google],
	trustHost: true,
};

export { config };
