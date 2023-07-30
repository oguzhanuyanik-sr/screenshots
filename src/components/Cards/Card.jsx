import { Tilt } from 'react-tilt';
import { tiltOptions } from '../../constants';
import PhoneFrame from './PhoneFrame';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

const Card = ({ img, title, size, lang }) => {
  const { setWarning } = useContext(GlobalContext);
  useEffect(() => {
    setWarning({
      size: size,
      lang: lang,
    });
  }, [size, lang, setWarning]);

  return (
    <>
      {size === 0 ? (
        <div className='text-9xl font-logo w-full text-center mt-36'>
          NO SCREENSHOTS!
        </div>
      ) : (
        <Tilt
          options={tiltOptions}
          className='w-full mb-16 md:mb-0 md:w-1/3 xl:w-auto transition-all duration-75'
        >
          <PhoneFrame>
            <img
              draggable='false'
              className='h-full w-full'
              src={img}
              alt={title}
            />
          </PhoneFrame>
        </Tilt>
      )}
    </>
  );
};

export default Card;
