import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const projects = await prisma.action.findMany();
  return NextResponse.json(projects);
}