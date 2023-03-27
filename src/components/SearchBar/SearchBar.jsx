import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import searchIconDm from '../../images/search-icon-dark.svg';
import searchIconLm from '../../images/search-icon-light.svg';

const SearchBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`search-bar ${!theme ? '' : 'light-mode'}`}>
      <label htmlFor="input">
        <img src={theme ? `${searchIconLm}` : `${searchIconDm}`} />
      </label>
      <input type="text" placeholder="Search for a country..." id="input" />
    </div>
  );
};

export default SearchBar;
