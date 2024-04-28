'use client';

import GoogleIcon from '@/public/google-icon.png';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

type LoginButtonProps = {
  callbackUrlPath?: string;
};

const LoginButton = ({ callbackUrlPath }: LoginButtonProps) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      signIn('google', {
        callbackUrl: callbackUrlPath ? callbackUrlPath : '/',
      });
    }}
    className='flex w-full items-center justify-between gap-x-3 rounded-full border px-3 py-3 hover:bg-gray-100'
  >
    ورود با گوگل
    <div className='relative size-5'>
      <Image
        src={GoogleIcon}
        alt='google-icon'
        fill
        sizes='100vw'
        quality={100}
        className='object-cover'
      />
    </div>
  </button>
);

export default LoginButton;
