import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryLink from './components/CountryLink/CountryLink';
import { ThemeProvider } from './context/ThemeContext';
import Base from './pages/Base/Base';
import Error from './pages/Error/Error';
import Header from './pages/Header/Header';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/:id" element={<CountryLink />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
