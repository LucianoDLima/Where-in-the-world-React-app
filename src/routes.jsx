import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from './pages/Base/Base';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path='*' element={<h1>Nothing to see here...</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
