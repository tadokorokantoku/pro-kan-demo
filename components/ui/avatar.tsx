import Image from "next/image";

import type { FC } from "react";

type AvatarProps = {
	avatarUrl: string | null | undefined;
};

const Avatar: FC<AvatarProps> = ({ avatarUrl }) => {
	return (
		<div className="avatar">
			<div className="w-8 rounded">
				<Image src={avatarUrl || ""} width={32} height={32} alt="avatar" />
			</div>
		</div>
	);
};

export { Avatar };
