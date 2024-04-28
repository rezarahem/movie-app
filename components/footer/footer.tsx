import Container from '@/components/ui/container';
import ThemeButtonToggler from '../navbar/theme-button-toggler';

const Footer = () => {
  return (
    <footer className='border-t py-8 dark:border-gray-700 dark:bg-black'>
      <Container isFullHeight className='items-center'>
        <ThemeButtonToggler />
      </Container>
    </footer>
  );
};

export default Footer;
