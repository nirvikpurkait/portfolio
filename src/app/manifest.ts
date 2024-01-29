import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Nirvik's Portfolio",
		short_name: "Nirvik's Portfolio",
		description: "Nirvik's Portfolio",
		start_url: "/",
		display: "standalone",
		background_color: "#9c1ddc",
		theme_color: "#9c1ddc",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
				purpose: "any",
			},
			{
				src: "/N-192.svg",
				sizes: "any",
				type: "image/svg+xml",
				purpose: "any",
			},
			{
				src: "/N-512.svg",
				sizes: "any",
				type: "image/svg+xml",
				purpose: "any",
			},
			{
				src: "/N-196.png",
				sizes: "196x196",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/N-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
