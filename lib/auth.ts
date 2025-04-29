import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const {handlers, signIn, signOut, auth} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }), Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
  })],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user?.id) { // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email!;
      session.user.image = token.picture;
      return session;
    },
    authorized: async({ auth }) => {
      return !!auth;
    }
  },
  session: {
    strategy: "jwt"
  },

  
});
