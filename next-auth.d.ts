import NextAuth, { type DefaultSession } from 'next-auth';
import { userRole } from '@/drizzle/schema';

export type ExtendedUser = DefaultSession['user'] & {
  role: typeof userRole;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
