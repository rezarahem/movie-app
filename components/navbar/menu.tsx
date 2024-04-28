'use client';
import { Menu as MenuIcon } from 'lucide-react';

const Menu = () => {
  return (
    <button className='rounded-md px-4 py-2 text-white hover:bg-gray-300/10'>
      <MenuIcon className='size-5' />
    </button>
  );
};

export default Menu;
