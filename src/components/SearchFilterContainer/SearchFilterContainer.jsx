import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Filter } from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';

const SearchFilterContainer = ({value, onChange}) => {

  return (
    <section className={`search-filter-container`}>
      <SearchBar value={value} onChange={onChange}/>
      <Filter />
    </section>
  );
};

export default SearchFilterContainer;
