import type { Metadata } from "next";
import "@/styles/globals.css";
import { cls } from "@/utils/tailwind/cls";
import Navbar from "@/components/nav/Navbar";

export const metadata: Metadata = {
	title: {
		default: "Nirvik Purkait - Portfolio",
		template: "Nirvik Purkait - %s",
	},
	description: "This is a portfolio of Nirvik Purkait",
	authors: [
		{ name: "Nirvik Purkait", url: "http://github.com/nirvikpurkait" },
	],
	applicationName: "Nirvik Purkait - Portfolio",
	creator: "Nirvik Purkait",
	bookmarks: "nirvik, purkait, portfolio",
	robots: "index, about, contact, project ",
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
					`text-text bg-background min-h-screen flex flex-col pl-0 pb-14 sm:pl-14 sm:pb-0`
				)}
			>
				<header>
					<Navbar />
				</header>
				<main className={cls(`flex-grow`)}>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
