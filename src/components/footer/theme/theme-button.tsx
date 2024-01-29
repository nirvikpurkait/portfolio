"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "./theme-switch-button.ui";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function ThemeSwitchButton() {
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const chnageTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return <Skeleton className={cn(`w-11 h-6 rounded-2xl`)} />;

	return (
		<Switch
			onClick={() => chnageTheme()}
			defaultChecked={theme === "dark"}
			aria-label="theme-button"
		/>
	);
}
