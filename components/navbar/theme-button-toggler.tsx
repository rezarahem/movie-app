'use client';

import { Moon, MoreHorizontal, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeButtonToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return (
      <div className='rounded-md border p-2 text-gray-400'>
        <MoreHorizontal className='size-4' />
      </div>
    );

  return (
    <button
      className='rounded-md border p-2 text-gray-400 shadow-sm hover:bg-gray-100/35 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-300/15'
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
      }}
    >
      <span>
        {resolvedTheme === 'light' ? (
          <Moon className='size-4' />
        ) : (
          <Sun className='size-4' />
        )}
      </span>
    </button>
  );
};

export default ThemeButtonToggler;
