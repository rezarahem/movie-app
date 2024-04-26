import { drizzleDb } from '@/drizzle/drizzle-db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import { users } from './drizzle/schema';
import { eq } from 'drizzle-orm';

export const { handlers, auth } = NextAuth({
  adapter: DrizzleAdapter(drizzleDb),
  ...authConfig,
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token;

      const [existingUser] = await drizzleDb
        .select()
        .from(users)
        .where(eq(users.id, token.sub));

      if (!existingUser) return token;

      token.role = 'user[fake]';

      return token;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as 'ADMIN' | 'USER';
      }

      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  // pages: {
  //   signIn: 'login',
  // },
});
