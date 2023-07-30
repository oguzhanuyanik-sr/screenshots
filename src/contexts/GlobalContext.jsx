import response from '../api/response.json';
import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lang, setLang] = useState('english');
  const [warning, setWarning] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        lang,
        setLang,
        response,
        warning,
        setWarning,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
