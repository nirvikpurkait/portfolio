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
			{
				hostname: "res.cloudinary.com",
				pathname: "/dpohasqoa/image/upload/**",
			},
		],
	},
};

module.exports = nextConfig;
