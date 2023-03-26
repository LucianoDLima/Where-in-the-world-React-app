import React, { useContext } from 'react';
import ThemeButton from '../../components/ThemeButton/ThemeButton';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <header className={theme}>
      <h1>Where in the world?</h1>

      <ThemeButton />
    </header>
  );
};

export default Header;
