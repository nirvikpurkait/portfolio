import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				text: "var(--text)",
				background: "var(--background)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
			},
			maxWidth: {
				"2xs": "16rem",
				xs: "20rem",
			},
			fontFamily: {
				amaranth: ["Amaranth", ...defaultTheme.fontFamily.sans],
				rajdhani: ["Rajdhani", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/container-queries")],
};
export default config;
