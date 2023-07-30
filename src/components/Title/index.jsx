import { MdWarning } from 'react-icons/md';
import { inches } from '../../constants';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

const Title = () => {
  const { activeIndex, lang, warning } = useContext(GlobalContext);

  return (
    <div className='ps-2 py-7 w-full flex flex-col mb-20 relative'>
      <p className='flex items-center font-bold text-green-100 text-5xl uppercase mb-3 gradient-text'>
        {`iPhone ${(inches[activeIndex] || 0).toFixed(1)}" Display`}
        <span className='ms-5 text-xs inline-block'>{`(${lang} version)`}</span>
      </p>
      <div
        className={`${
          warning.size === 0 ||
          (warning.size === inches[activeIndex] && warning.lang === lang)
            ? 'hidden'
            : 'flex'
        } absolute bottom-0 font-bold items-center text-md text-orange-100 gap-3`}
      >
        <MdWarning className='text-2xl' />
        <p className='border-b-2 capitalize'>
          {`Using ${(warning.size || 0).toFixed(1)}" Display (${
            warning.lang
          } version)`}
        </p>
      </div>
    </div>
  );
};

export default Title;
