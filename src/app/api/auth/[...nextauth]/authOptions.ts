import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

const addRolUser = async (userId: string) => {
  const rol = await prisma.roles.findUnique({
    where: { name: "Invitado" },
  });

  await prisma.user.update({
    where: { id: userId },
    data: {
      roles: {
        connect: { id: rol?.id! },
      },
    },
  });
};

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user }) {
      const userdb = await prisma.user.findUnique({
        where: { email: user.email! },
      });

      if (!userdb?.isActive) {
        return false;
      }
      return true;
    },

    async jwt({ token }) {
      const userdb = await prisma.user.findUnique({
        where: { email: token.email! },
        include: { roles: true },
      });

      const rolesUser = userdb?.roles.filter((role) => role.id);
      if (rolesUser?.length === 0) {
        await addRolUser(token.sub!);
      }
      token.roles = rolesUser;
      return token;
    },

    async session({ session, token }) {
      if (session && session.user) {
        session.user.roles = token.roles;
        session.user.id = token.sub!;
      }

      return session;
    },
  },
};

export default authOptions;
