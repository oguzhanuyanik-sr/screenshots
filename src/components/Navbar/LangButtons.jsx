import { flags } from '../../constants';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

const LangButtons = () => {
  const { lang, setLang } = useContext(GlobalContext);

  return (
    <div className='hidden xl:flex'>
      {flags.map((item, index) => (
        <img
          key={index}
          onClick={(e) => setLang(e.target.alt)}
          className={`${
            lang === item.alt ? 'opacity-100' : 'opacity-30 hover:opacity-60'
          } h-16 cursor-pointer transition-all duration-200`}
          src={item.img}
          alt={item.alt}
        />
      ))}
    </div>
  );
};

export default LangButtons;
