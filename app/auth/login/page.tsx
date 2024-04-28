// 'use client';
import LoginButton from '@/components/auth/login-button';
import bgImgae from '@/public/hour-of-the-wolf.jpg';
import Image from 'next/image';

const LoginPage = async ({
  searchParams,
}: {
  searchParams: {
    callbackUrl: string;
  };
}) => {
  return (
    <div className='relative flex h-full flex-col lg:grid lg:grid-cols-10'>
      <div className='fixed inset-0 z-20 mx-auto flex flex-col items-center justify-center px-6 py-3 sm:max-w-lg lg:static lg:col-span-3 lg:w-full'>
        <div className='mb-36 flex h-48 w-full flex-col justify-center gap-y-7 space-y-6 rounded-md bg-white p-2 shadow-xl lg:bg-transparent lg:shadow-none'>
          <h2 className='text-2xl font-extrabold sm:text-3xl lg:text-4xl '>
            خوش آمدید
          </h2>
          <LoginButton callbackUrlPath={searchParams.callbackUrl} />
        </div>
        {/* <div className='hidden lg:mt-auto lg:block'>movie app</div> */}
      </div>
      {/*  */}
      <div className='relative h-full lg:col-span-7'>
        <div className='fixed inset-x-0 bottom-3 z-10'>
          <div className='mx-auto w-fit rounded-full bg-slate-100/10 px-3 py-2 pt-[10px] text-gray-300 lg:ml-3 lg:mr-auto'>
            Hour of the Wolf
          </div>
        </div>
        <div className='relative h-full '>
          <Image
            src={bgImgae}
            alt='bg'
            fill
            className='object-cover object-center brightness-75'
            sizes='100vw'
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
