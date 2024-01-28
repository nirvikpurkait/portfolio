import Home from "@/components/home-page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: {
		absolute: "Nirvik Purkait - Home",
	},
};

export default function HomePage() {
	return <Home />;
}
