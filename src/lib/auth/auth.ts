import NextAuth from "next-auth";
import { config } from "./auth.config";

const {
	auth,
	handlers: { GET, POST },
	signIn,
	signOut,
} = NextAuth(config);

export { auth, GET, POST, signIn, signOut };
