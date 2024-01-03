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
	const modalRef = useRef({} as HTMLDialogElement);

	// function to run when the modal has to close
	function close() {
		modalRef.current.close();
		setOpen(!open);
		if (props.onModalClose) props.onModalClose();
	}

	useEffect(() => {
		if (props.closeOnInteractionOutside)
			window.addEventListener(
				"click",
				(e) => {
					/**
					 * if the modal is open and when clicking outside
					 * the target is the modal or it's children
					 * execute the block of code
					 */
					if (
						modalRef.current?.open &&
						!validNode(modalRef.current, e.target as HTMLElement)
					) {
						close();
					}

					/**
					 * checks if the clicked target has the modal as a
					 * parent or not
					 */
					function validNode(
						finalParent: HTMLElement,
						currentNode: HTMLElement
					) {
						if (currentNode === undefined) return false;

						if (currentNode === finalParent) return true;

						if (currentNode?.parentElement === finalParent)
							return true;

						currentNode = currentNode?.parentElement!;

						return validNode(finalParent, currentNode);
					}
				},
				true
			);
	}, [open]);

	return (
		<div
			className={cls(
				`fixed top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center px-4 pb-14 sm:pl-16 sm:pr-0 sm:pb-0 flex-col`,
				{
					flex: open,
					hidden: !open,
					"z-10": open,
				}
			)}
		>
			<dialog
				className={cls(
					`min-w-[10rem] bg-white dark:bg-black px-4 py-3 rounded-md`,
					props.className
				)}
				ref={modalRef}
				open
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
			</dialog>
		</div>
	);
}
