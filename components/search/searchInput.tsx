import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <>
      <button className='rounded-md px-4 py-2 text-white hover:bg-gray-300/10 sm:hidden'>
        <Search className='size-5' />
      </button>
      <input
        type='text'
        className='hidden w-full flex-grow rounded-md bg-slate-100/20 p-2 text-sm text-white outline-none ring-movies/90 focus:ring-2 sm:block'
        placeholder='جستجو ...'
      />
    </>
  );
};

export default SearchInput;
