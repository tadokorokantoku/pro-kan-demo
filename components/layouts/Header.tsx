"use client";

import { Avatar } from "@/components/ui/avatar";
import { signIn, useSession } from "next-auth/react";
import type { FC } from "react";

const Header: FC = () => {
	const { data: session, status } = useSession();

	if (status === "loading") return null;
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<title>Menu</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</div>
					<ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
						<li>
							<a href="/action">アクション</a>
						</li>
						<li>
							<a href="/project">プロジェクト一覧</a>
						</li>
					</ul>
				</div>
			</div>
			<button type="button" className="btn" onClick={() => signIn("github")}>
				daisyUI
			</button>
			<div className="navbar-end">
				<button type="button" className="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<title>Search</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
				{status === "authenticated" && (
					<button type="button" className="btn btn-square btn-ghost">
						<Avatar avatarUrl={session.user?.image} />
					</button>
				)}
			</div>
		</div>
	);
};

export default Header;
