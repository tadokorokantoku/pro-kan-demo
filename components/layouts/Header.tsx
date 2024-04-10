import Link from "next/link";
import type { FC } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Header: FC = () => {
	return (
		<div className="fixed top-0 w-full h-20  bg-white">
			<div className="p-5 flex items-center justify-center gap-2">
				<Button variant="ghost">
					<Link href="/">Home</Link>
				</Button>
				<Button variant="ghost">
					<Link href="/action">Actions</Link>
				</Button>
			</div>
			<Separator orientation="horizontal" className="w-full" />
		</div>
	);
};

export default Header;
