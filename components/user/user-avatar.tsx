'use client';

import { LogOut, User } from 'lucide-react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type UserAvatarProps = {
  session: Session | null;
};

const UserAvatar = ({ session }: UserAvatarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);

  const checkClickedOutside = useCallback(
    (e: MouseEvent) => {
      if (
        isOpen &&
        modelRef.current &&
        !modelRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', checkClickedOutside);

    return () => document.removeEventListener('mousedown', checkClickedOutside);
  }, [isOpen]);

  return (
    <div className='relative max-w-7xl'>
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className='relative rounded-md px-4 py-2 text-sm hover:bg-gray-300/10'
      >
        <User className='size-5 text-white' />
      </button>
      {isOpen && (
        <div
          ref={modelRef}
          className='absolute left-0 top-14 w-80 rounded-md border bg-white shadow-md'
        >
          <div className='flex items-center gap-x-3 border-b p-4'>
            <div className='relative size-14 overflow-hidden rounded-full border-2 border-blue-600'>
              <Image
                src={session?.user.image as string}
                alt='user-image'
                fill
                sizes='100vw'
                className='object-cover object-center'
              />
            </div>
            <div className='space-y-1'>
              <p className='text-2xl font-bold'>{session?.user.name}</p>
              <p className='text-xs text-gray-700'>{session?.user.email}</p>
            </div>
          </div>

          <div className='flex w-full flex-col p-4'>
            <Link href='#' className='rounded-md px-2 py-3 hover:bg-slate-100'>
              لینک
            </Link>
            <Link href='#' className='rounded-md px-2 py-3 hover:bg-slate-100'>
              لینک
            </Link>
            <Link href='#' className='rounded-md px-2 py-3 hover:bg-slate-100'>
              لینک
            </Link>
            <Link href='#' className='rounded-md px-2 py-3 hover:bg-slate-100'>
              لینک
            </Link>
            <button
              className='flex w-full items-center gap-x-2 rounded-md px-2 py-3 text-rose-500 hover:bg-slate-100'
              onClick={(e) => {
                e.preventDefault();
                signOut({
                  callbackUrl: '/',
                });
              }}
            >
              <LogOut className='size-5' />
              خروج
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
