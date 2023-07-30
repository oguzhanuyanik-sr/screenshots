import LangButtons from './LangButtons';
import Logo from './Logo';
import InchButtons from './InchButtons';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-center text-white-100 bg-green-300 text-base w-full h-24 py-0 px-5 nav-border'>
      <Logo />
      <InchButtons />
      <LangButtons />
      <RxHamburgerMenu className='xl:hidden text-5xl cursor-pointer' />
    </div>
  );
};

export default Navbar;
