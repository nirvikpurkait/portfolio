/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ["@react-pdf/renderer"],
	},
	images: {
		remotePatterns: [
			{
				hostname: "img.icons8.com",
			},
		],
	},
};

module.exports = nextConfig;
