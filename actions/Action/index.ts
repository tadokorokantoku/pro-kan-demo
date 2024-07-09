"use server";

import prisma from "@/lib/prismaClient";

export const fetchActions = async () => {
	const actions = await prisma.action.findMany();
	return actions;
};
