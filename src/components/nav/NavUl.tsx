import { cls } from "@/utils/tailwind/cls";
import {
	faBriefcase,
	faHouseChimney,
	faAddressCard,
	faSun,
	faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "./Nav.module.scss";
import { Li } from "./NavLi";

export default function NavUl() {
	return (
		<nav
			className={cls(
				`fixed w-screen h-14 left-0 bottom-0 bg-red-500 sm:w-14 sm:h-screen bg-accent after:bg-accent text-white z-[999999]`,
				style.nav
			)}
		>
			<ul
				className={cls(
					`flex gap-4 group-ul justify-between items-center sm:flex-col sm:justify-start w-full h-full px-4 py-0 sm:py-4 sm:px-0`
				)}
			>
				<Li
					className={cls(
						`bg-accent w-auto sm:w-full px-3 py-2 h-full sm:h-auto relative`
					)}
					icon={
						<FontAwesomeIcon
							className={cls(`w-full`)}
							icon={faHouseChimney}
						/>
					}
					text={`Home`}
				></Li>

				<Li
					className={cls(
						`bg-accent w-auto sm:w-full px-3 py-2 h-full sm:h-auto relative`
					)}
					icon={
						<FontAwesomeIcon
							className={cls(`w-full`)}
							icon={faCircleInfo}
						/>
					}
					text={`About`}
				></Li>

				<Li
					className={cls(
						`bg-accent w-auto sm:w-full px-3 py-2 h-full sm:h-auto relative`
					)}
					icon={
						<FontAwesomeIcon
							className={cls(`w-full`)}
							icon={faBriefcase}
						/>
					}
					text={`Project`}
				></Li>

				<Li
					className={cls(
						`bg-accent w-auto sm:w-full px-3 py-2 h-full sm:h-auto relative`
					)}
					icon={
						<FontAwesomeIcon
							className={cls(`w-full`)}
							icon={faAddressCard}
						/>
					}
					text={`Contact`}
				></Li>

				<li
					className={cls(
						`mt-auto bg-accent w-auto sm:w-full px-3 py-2 h-full sm:h-auto relative`
					)}
				>
					<button className={cls(`block w-8`)}>
						<FontAwesomeIcon
							className={cls(`w-full`)}
							icon={faSun}
						/>
						<span
							className={cls(
								`absolute top-2/4 left-full -translate-y-2/4 text-2xl hidden sm:inline sm:pl-1`
							)}
						>
							Theme
						</span>
					</button>
				</li>
			</ul>
		</nav>
	);
}
