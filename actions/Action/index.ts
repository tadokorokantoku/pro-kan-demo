"use server";

import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export const fetchActions = async () => {
	const actions = await prisma.action.findMany();
	return actions;
};
