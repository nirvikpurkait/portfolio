import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			textUnderlineOffset: {
				"6": "6px",
				"10": "6p10",
				"12": "612x",
				"14": "14px",
				"16": "16px",
			},
			colors: {
				text: "var(--text)",
				background: "var(--background)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
				footer: "var(--footer)",
			},
			maxWidth: {
				"2xs": "16rem",
				xs: "20rem",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			fontFamily: {
				amaranth: ["Amaranth", ...defaultTheme.fontFamily.sans],
				rajdhani: ["Rajdhani", ...defaultTheme.fontFamily.sans],
			},
			screens: {
				"3xs": "340px",
				"2xs": "480px",
				xs: "540px",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/container-queries"),
	],
} satisfies Config;

export default config;
