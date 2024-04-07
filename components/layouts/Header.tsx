import type { FC } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Header: FC = () => {
	return (
		<div className="fixed top-0 w-full h-20  bg-white">
			<div className="p-5 flex items-center justify-center">
				<Button variant="ghost">Header</Button>
			</div>
			<Separator orientation="horizontal" className="w-full" />
		</div>
	);
};

export default Header;
