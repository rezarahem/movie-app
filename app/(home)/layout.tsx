import { auth } from '@/auth';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { SessionProvider } from 'next-auth/react';

const HomeLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <Navbar />
      <div className='h-full'>{children}</div>
      <Footer />
    </SessionProvider>
  );
};

export default HomeLayout;
