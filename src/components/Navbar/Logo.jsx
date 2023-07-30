import { Link } from 'react-router-dom';
import { logo } from '../../constants';

const Logo = () => {
  return (
    <Link
      to={'/'}
      className='flex items-center text-4xl text-white-100 select-none font-bold font-logo'
    >
      <img className='h-16 mr-3' src={logo.img} alt={logo.alt} />
      {logo.text}
    </Link>
  );
};

export default Logo;
