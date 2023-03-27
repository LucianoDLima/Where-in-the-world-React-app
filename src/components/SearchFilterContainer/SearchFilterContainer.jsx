import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Filter } from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';

const SearchFilterContainer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`search-filter-container`}>
      <SearchBar />
      <Filter />
    </section>
  );
};

export default SearchFilterContainer;
