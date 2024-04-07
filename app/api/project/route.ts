import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const projects = await prisma.project.findMany();
  return NextResponse.json(projects);
}