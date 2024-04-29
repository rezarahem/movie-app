import { auth } from '@/auth';
import Link from 'next/link';
import UserAvatar from './user-avatar';
import { LogIn } from 'lucide-react';

const User = async () => {
  const session = await auth();

  if (!session?.user || !session)
    return (
      <Link
        href='/auth/login?callbackUrl=/'
        className='flex items-center gap-x-2 rounded-md px-2 py-2 text-sm text-white hover:bg-gray-300/10 sm:px-4'
      >
        <LogIn className='size-5' />
        ورود
      </Link>
    );

  return <UserAvatar session={session} />;
};

export default User;
