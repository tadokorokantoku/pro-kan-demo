import type { Action } from "@/app/api/types";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import React from "react";

const ActionsTable = ({ actions }: { actions: Action[] }) => {
	return (
		<div className="p-3">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>アクション名</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>UpdatedAt</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{actions.map((action) => (
						<TableRow key={action.id}>
							<TableCell className="font-medium">{action.name}</TableCell>
							<TableCell>{action.canBeExecutedOnOthers ? "⚪︎" : "×"}</TableCell>
							<TableCell className="text-right">
								{new Date(action.updatedAt).toLocaleDateString("ja-JP", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default ActionsTable;
