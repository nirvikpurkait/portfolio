import React from "react";
import { cookies } from "next/headers";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Providers = "google";

export default async function SigninButton({
	oAuthprovider,
	oAuthproviderName,
}: {
	oAuthprovider: Providers;
	oAuthproviderName: string;
}) {
	const cookieStore = cookies();
	const csrfToken = cookieStore.get("next-auth.csrf-token")?.value;
	const callbackUrl = cookieStore.get("next-auth.callback-url")?.value;

	return (
		<form
			action={`${process.env.NEXTAUTH_URL}/api/auth/signin/${oAuthprovider}`}
			method="POST"
			className={cn(`block max-w-xs`)}
		>
			<input
				type="hidden"
				name="csrfToken"
				defaultValue={csrfToken?.split("|")[0]}
			/>
			<input type="hidden" name="callbackUrl" value={callbackUrl} />
			<button
				type="submit"
				className={cn(
					`flex gap-2 items-center w-full py-3 border-2 border-solid bg-black/5 hover:bg-black/10 border-black/20 rounded-xl dark:border-white/30 dark:bg-white/10 hover:dark:bg-white/20 transition-all`
				)}
			>
				<span className={cn(`inline-block px-5`)}>
					<Image
						loading="lazy"
						className={cn(`w-8`)}
						height="24"
						width="24"
						id="provider-logo"
						alt="google-image"
						src={`https://authjs.dev/img/providers/${oAuthprovider}.svg`}
					/>
				</span>
				<span
					className={cn(
						`text-lg px-3flex w-full justify-center items-center pr-10`
					)}
				>
					Sign in with {oAuthproviderName}
				</span>
			</button>
		</form>
	);
}
