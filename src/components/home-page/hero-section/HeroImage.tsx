"use client";

import { Skeleton } from "@/components/custom-components";
import { cls } from "@/utils/tailwind/cls";
import Image from "next/image";
import React, { useState } from "react";

export default function HeroImage() {
	const [loading, setLoading] = useState(true);

	return (
		<div
			className={cls(
				`relative w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80`
			)}
		>
			<Image
				src={`https://res.cloudinary.com/dpohasqoa/image/upload/v1703691918/portfolio/profile-picture.svg`}
				alt="profile-picture"
				fill
				placeholder="blur"
				blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAYAAADk3wSdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARwSURBVHgBfZVfTFtVHMe/9/a2t/97C+1YB0grY1TdFsKyOFw0YPagiQ/6YBZMiKJPPrknE5fMQOLTEh/2MpeYZXuYT5o44jQkuthpTIiAqwKuAoO6wVoY0NvS2/b+3+8yIIV0/SUn9/R3zvnk+/tzThnUsa9gRjkgWu2j38lBMGK9c8x+x1WYH5DzfZp20RAKkQWsRqbArQhoy/WAKTmsbaIJJOg78hGY68+EXiNVtPH7bdiW/dvxLSaaryOfF2GYOoLac3hn+Uv4cq3VjDSdG66GM1XAX1EV6oOmP/BD66colStQKhXohoaAEEKAC6P/rxvgde8edXR+iMDD1pzdcWBf7h7a/kZUcKDZY0PEyyIe9qHdz6IgLeA/zy+oEfIQpe7c1pxUCgTNVW9g3SruRb5DfGASTmgwdR2maWJto4CfJmbwRnIEAaUFNUwkeIzTKIe2fSvmsR/RcvoOMmsGxqdm0HnAC5ZlUdRZvBg9DvvyIrBcEypYPI6tKsyO2bkQGgQf2gI+uBgVoYAX03MEIrUBtwR76zxBX60FtfLZxVn0/QvqXCfkrga0NLM42tGGsmrgpQ4DTeEQ5tJL4LI9qGMCV8trroYhJU5i3LyG6YUs/JwDa5KEsJ9DdPYC3Ol4PajIPmvFs3gCv917hKDgh8/ngUApmJ/n4U/1op4RMGnl1GrevUYlbDpUQZTCHZ2cwvMHglhczeGVlm40milIKxGYhgu6zEB/esN2rUI8Tt+W2xRfRLh1HDY+A6czhQKbQ/yQF6YUwnR6GSeaG9HUkEfMdwGOmAbO7YLd7oBY6sXU7X6om06Lmf4YTJqjdkoeOj2DF6IXUVpfhybJsBV0BKjSBzMylBCPYCwC96aKw/MZGG4vdLsdKJepgAo42zfofnMRk7c+h1riEtuBAql3B3KV7ENB1zU4bDbwDANV1ej2SHhcKkM2DAguJ9w2B0EYeFwuqIZOfp326fBT3svsh7h7+72YpXSr78+6PBFF1U65eTvlyoCDs4NhWBpAgAACT0CeB2/n6OsES0oZlvJJF1yh21ZWVPg8syNv3R+4sl0sYEnK3SyqMjiC2WkYFDpDRJa1QTHoDSWYvn1VLRhDahnyOR08+Y2tiDYK4rmqDgD6U6mEaWiJJC1+kc/TIRtkTYVBSvS+1zHmDz5VRxXQCawRqERhp8U8litlEsIN942NpXegu80fdHqGs5LUG3F6UFA0qJoOidSlfQfhfvsYijcuA1aoFPQDWcGGacC5mcdapZIceLQ0VN1Wu9CeibHExePdl3hN/eT8WhExCk+qyAiVFLRT63y9KeOIUgTrcFBKTMhyBUc1LVksFfv2t/meB+rnlczoEa8v2BBuPPXymTMINYSB5jjadAYr//yOAoXeebgdLLUeB+ZS3FAGP8tmxbpQy+7m1kcLYP9vNWxdplwW1u2N8NI7KpZX4XXyOFko3JnMPR68en/2yogoVlDDGNSx8x0dXa7XzkZbGpqFP29dFjPlzcTNdLruP6llTwA3WdweacikCwAAAABJRU5ErkJggg=="
			/>
		</div>
	);
}
