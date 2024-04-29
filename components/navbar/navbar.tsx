import Container from '../ui/container';
import Logo from '../ui/logo';
import SearchInput from '../search/searchInput';
import User from '../user/user';
import Menu from './menu';

const Navbar = () => {
  return (
    <nav className='h-14 border-b bg-[#121212] py-1 dark:border-gray-700 dark:bg-[#121212]'>
      <Container isFullHeight className='items-center gap-x-2'>
        <div className='flex items-center gap-x-2 sm:flex-row-reverse'>
          <Menu />
          <Logo iconSize='siz-6 sm:size-7' fontSize='text-3xl sm:text-4xl' />
        </div>
        <div className='mr-auto sm:mr-0 sm:w-full'>
          <SearchInput />
        </div>
        <div className=''>
          <User />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
