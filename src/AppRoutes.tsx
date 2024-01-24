import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header/Header';
import Base from './pages/Base/Base';
import CountryLink from './components/CountryLink/CountryLink';
import Error from './pages/Error/Error';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/:id" element={<CountryLink />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
