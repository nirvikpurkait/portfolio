import { cls } from "@/utils/tailwind/cls";
import React from "react";

export default function ProjectIdDynamicDefault() {
	return <div className={cls(`__project/[projectId]/page__`)}></div>;
}
