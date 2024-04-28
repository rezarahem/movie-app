import { cn } from '@/libs/utils';
import { Film } from 'lucide-react';
import Link from 'next/link';

type LogoProps = {
  iconSize?: string;
  fontSize?:
    | 'text-xs'
    | 'text-sm'
    | 'text-base'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
    | 'text-7xl'
    | 'text-8xl'
    | 'text-9xl';
};

const Logo = ({ iconSize, fontSize }: LogoProps) => {
  return (
    <Link href='/' className='text-movies -mr-2 flex items-center gap-x-2 p-2'>
      <h1 className={cn('font-jersey text- text-2xl', fontSize)}>Movies</h1>
      <Film className={cn('size-5', iconSize)} />
    </Link>
  );
};

export default Logo;
