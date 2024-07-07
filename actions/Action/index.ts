"use server";

import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export const fetchActions = async () => {
	const projects = await prisma.action.findMany();
	return NextResponse.json(projects);
};
