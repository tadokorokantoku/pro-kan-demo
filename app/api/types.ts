export interface Action {
	id: string;
	name: string;
	canBeExecutedOnOthers: boolean;
	createdAt: Date;
	updatedAt: Date;
}
