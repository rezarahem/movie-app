import Container from '../ui/container';
import Logo from '../ui/logo';
import SearchInput from '../search/searchInput';
import User from '../user/user';
import Menu from './menu';

const Navbar = () => {
  return (
    <nav className='h-14 border-b bg-[#121212] py-1 dark:border-gray-700 dark:bg-[#121212]'>
      <Container isFullHeight className='items-center gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <Logo iconSize='size-7' fontSize='text-4xl' />
          <Menu />
        </div>
        <div className='w-full'>
          <SearchInput />
        </div>
        <div className='mr-auto'>
          <User />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
