import ModalContent from "@/components/project/modal-view/ModalContent";
import ProjectCardModalView from "@/components/project/modal-view/ProjectCardModalView";
import { cls } from "@/utils/tailwind/cls";
import React from "react";

export default function ProjectCardModalSlotProjectIdPage({
	params,
}: {
	params: { projectId: string };
}) {
	return (
		<div className={cls(`__project/@modal/[projectId]/page__`)}>
			<ProjectCardModalView>
				<ModalContent id={params.projectId} />
			</ProjectCardModalView>
		</div>
	);
}
