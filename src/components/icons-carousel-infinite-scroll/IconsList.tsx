import { prisma } from "@/database/prisma";
import { cls } from "@/utils/tailwind/cls";
import React from "react";

export default async function IconsList() {
	const icons = await prisma.icon.findMany();

	return (
		<>
			{icons.map(
				(icon: {
					id: string;
					link: string;
					special: boolean | null;
					icon_details: string | null;
					key: string;
				}) => {
					const style: React.CSSProperties = {
						borderRadius: "50%",
						background: "white",
					};
					return (
						<li
							key={icon.key}
							className={cls(
								`max-w-[40px] sm:max-w-[45px] md:max-w-[50px] lg:max-w-[55px]`
							)}
						>
							{
								<img
									loading="lazy"
									src={icon.link}
									alt={icon.icon_details ?? "icon"}
									style={icon.special ? style : {}}
								/>
							}
						</li>
					);
				}
			)}
		</>
	);
}
