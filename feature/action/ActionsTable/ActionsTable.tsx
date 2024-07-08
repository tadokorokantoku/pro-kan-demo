import type { Action } from "@/app/api/types";
import React from "react";

const ActionsTable = ({ actions }: { actions: Action[] }) => {
	return (
		<div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead>
					<tr>
						<th />
						<th>Action Name</th>
						<th>Status</th>
						<th>UpdatedAt</th>
					</tr>
				</thead>
				<tbody>
					{actions.map((action, index) => (
						<tr key={action.id} className="hover">
							<th>{index + 1}</th>
							<td>{action.name}</td>
							<td>{action.canBeExecutedOnOthers ? "OK" : "NG"}</td>
							<td>
								{new Date(action.updatedAt).toLocaleDateString("ja-JP", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ActionsTable;
