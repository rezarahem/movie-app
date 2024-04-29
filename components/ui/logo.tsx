import { cn } from '@/libs/utils';
import { Film } from 'lucide-react';
import Link from 'next/link';

type LogoProps = {
  iconSize?: string;
  fontSize?: string;
};

const Logo = ({ iconSize, fontSize }: LogoProps) => {
  return (
    <Link href='/' className='-mr-2 flex items-center gap-x-2 p-2 text-movies'>
      <h1 className={cn('text- font-jersey text-2xl', fontSize)}>Movies</h1>
      <Film className={cn('size-5', iconSize)} />
    </Link>
  );
};

export default Logo;
