import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Filter } from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';

const SearchFilterContainer = ({inputValue, onChangeInput, onChangeFilter, filterName}) => {

  return (
    <section className={`search-filter-container`}>
      <SearchBar value={inputValue} onChange={onChangeInput}/>
      <Filter filterName={filterName} onChangeFilter={onChangeFilter}/>
    </section>
  );
};

export default SearchFilterContainer;
