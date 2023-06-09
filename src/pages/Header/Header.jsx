import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from '../../components/ThemeButton/ThemeButton';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <header className={theme}>
      <Link to='./'><h1>Where in the world?</h1></Link>
      

      <ThemeButton />
    </header>
  );
};

export default Header;
