import prisma from "@/lib/prismaClient";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { type AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID || "",
			clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
		}),
	],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
