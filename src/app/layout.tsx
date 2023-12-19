import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cls } from "@/utils/tailwind/cls";
import Navbar from "@/components/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
					inter.className,
					`text-text bg-background p-2 pb-16 pl-2 sm:pb-2 sm:pl-16 md:pr-20 md:pl-32 min-h-screen`
				)}
			>
				<header>
					<Navbar />
				</header>
				<main className={cls(`pb-8`)}>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
