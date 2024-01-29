import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/theme/theme-provider";
import { cn } from "@/lib/utils";

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
	robots: "index, about, contact, project",
	other: {
		"theme-color": "#9c1ddc",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&family=Rajdhani:wght@400;700&display=swap"
					rel="stylesheet"
				></link>
			</head>
			<body
				className={cn(
					`text-text bg-background min-h-screen flex flex-col pl-0 pb-14 sm:pl-16 sm:pb-0`
				)}
			>
				<ThemeProvider>
					<header>
						<Navbar />
					</header>
					<main className={cn(`flex-grow overflow-clip`)}>
						{children}
					</main>
					<footer>
						<Footer />
					</footer>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
