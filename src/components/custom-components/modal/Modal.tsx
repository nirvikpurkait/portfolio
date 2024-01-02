"use client";

import { cls } from "@/utils/tailwind/cls";
import React, { useEffect, useRef, useState } from "react";

type ModalProps = {
	children: React.ReactNode;
	onModalClose?: () => void;
	closeOnInteractionOutside?: boolean;
	closeButton?: React.ReactNode;
	className?: string;
};

export default function Modal(props: ModalProps) {
	const [open, setOpen] = useState(true);
	const modalRef = useRef({} as HTMLDivElement);

	function close() {
		setOpen(!open);
		if (props.onModalClose) props.onModalClose();
	}

	useEffect(() => {
		if (props.closeOnInteractionOutside)
			window.addEventListener("click", (e) => {
				if (e.target !== modalRef.current) close();
			});
	}, []);

	return (
		<div
			className={cls(
				`fixed top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center ml-0 mb-14 sm:ml-16 sm:mb-0 flex-col`,
				{ flex: open, hidden: !open }
			)}
		>
			<div
				className={cls(
					`min-w-[10rem] bg-white dark:bg-black px-4 py-3 rounded-md`,
					props.className
				)}
				ref={modalRef}
			>
				<div>{props.children}</div>

				{props.closeOnInteractionOutside ? null : (
					<button
						onClick={close}
						className={cls(
							`ml-auto block border-black dark:border-white border-solid border-2 px-4 py-2 rounded-md`
						)}
					>
						{props.closeButton ?? `Close`}
					</button>
				)}
			</div>
		</div>
	);
}
