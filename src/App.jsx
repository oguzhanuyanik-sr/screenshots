import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { GlobalProvider } from './contexts/GlobalContext';

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
