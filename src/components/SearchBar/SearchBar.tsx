// import React, { useContext } from 'react';
// import { ThemeContext } from '../../context/ThemeContext';
import searchIconDm from '../../images/search-icon-dark.svg';
// import searchIconLm from '../../images/search-icon-light.svg';

const SearchBar = ({value, onChange}: any) => {
  // const { theme } = useContext(ThemeContext);
  return (
    <div className={`search-bar ${'light-mode'}`}>
      <label htmlFor="input">
        <img src={`${searchIconDm}`} />
      </label>
      <input type="text" placeholder="Search for a country..." id="input" value={value} onChange={onChange}/>
    </div>
  );
};

export default SearchBar;
