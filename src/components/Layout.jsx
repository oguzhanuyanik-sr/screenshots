import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Title from './Title';
import Cards from './Cards';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const { lang } = useContext(GlobalContext);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    } else {
      toast.info('Language updated.', {
        style: { backgroundColor: '#2c3e50', color: '#fff' },
      });
    }
  }, [lang]);

  return (
    <>
      <ToastContainer
        autoClose={750}
        closeOnClick={true}
        draggable={false}
        newestOnTop={false}
        position='bottom-right'
      />
      <Navbar />
      <main className='flex flex-col items-center'>
        <div className='m-5 xl:m-0 xl:container'>
          <Title />
          <Cards />
        </div>
      </main>
    </>
  );
};

export default Layout;
