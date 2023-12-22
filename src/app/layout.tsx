import type { Metadata } from "next";
import "@/styles/globals.css";
import { cls } from "@/utils/tailwind/cls";
import Navbar from "@/components/nav/Navbar";

export const metadata: Metadata = {
	title: "Portfolio | Nirvik Purkait",
	description: "This is a portfolio of NIrvik Purkait",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&family=Rajdhani:wght@400;700&display=swap"
					rel="stylesheet"
				></link>
			</head>
			<body
				className={cls(
					`text-text bg-background p-2 pb-16 pl-2 sm:pb-2 sm:pl-16 md:pr-20 md:pl-32 min-h-screen flex flex-col`
				)}
			>
				<header>
					<Navbar />
				</header>
				<main className={cls(`pb-8 flex-grow`)}>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
