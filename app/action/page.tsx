import { fetchActions } from "@/actions/Action";
import * as Components from "@/feature/action";
import type { Action } from "../api/types";

export default async function Home() {
	const response = await fetchActions();
	const actionList: Action[] = await response.json();

	return (
		<main className="p-32">
			<h3 className="text-2xl font-semibold leading-none tracking-tight">
				登録されているアクション
			</h3>
			<div className="mt-10">
				<Components.ActionsTable actions={actionList} />
			</div>
		</main>
	);
}
