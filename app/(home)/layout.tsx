import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className='h-full'>{children}</div>
      <Footer />
    </>
  );
}
