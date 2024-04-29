'use client';

import { LogOut, User } from 'lucide-react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowSize } from 'usehooks-ts';

type UserAvatarProps = {
  session: Session | null;
};

const UserAvatar = ({ session }: UserAvatarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

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
        className='relative rounded-md px-2 py-2 text-sm hover:bg-gray-300/10 sm:px-4'
      >
        <User className='size-5 text-white' />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{
              y: width > 639 ? 18 : -18,
              opacity: 100,
            }}
            exit={{
              opacity: 0,
            }}
            ref={modelRef}
            className='fixed inset-x-0 -bottom-5 z-10 w-full rounded-xl rounded-b-none border bg-white opacity-0 shadow-md sm:absolute sm:inset-auto sm:left-0 sm:top-10 sm:w-80 sm:rounded-md'
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
              <Link
                href='#'
                className='rounded-md px-2 py-3 hover:bg-slate-100'
              >
                لینک
              </Link>
              <Link
                href='#'
                className='rounded-md px-2 py-3 hover:bg-slate-100'
              >
                لینک
              </Link>
              <Link
                href='#'
                className='rounded-md px-2 py-3 hover:bg-slate-100'
              >
                لینک
              </Link>
              <Link
                href='#'
                className='rounded-md px-2 py-3 hover:bg-slate-100'
              >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserAvatar;
