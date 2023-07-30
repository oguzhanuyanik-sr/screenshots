import { inches } from '../../constants';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

const InchButtons = () => {
  const { activeIndex, setActiveIndex } = useContext(GlobalContext);

  return (
    <div className='h-full hidden xl:flex'>
      {inches.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`${
            activeIndex === index ? 'active' : ''
          } nav-button mr-9 transition-all duration-200 text-xl`}
        >
          {item.toFixed(1)}&quot;
        </button>
      ))}
    </div>
  );
};

export default InchButtons;
