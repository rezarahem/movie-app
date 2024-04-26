import { drizzleDb } from '@/drizzle/drizzle-db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import authConfig from '@/auth.config';

export const { handlers, auth } = NextAuth({
  adapter: DrizzleAdapter(drizzleDb),
  session: {
    strategy: 'jwt',
  },
  ...authConfig,
});
