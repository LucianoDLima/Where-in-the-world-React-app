import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Filter } from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';

const SearchFilterContainer = ({value}) => {
  const { theme } = useContext(ThemeContext);
  const [searchInput, setSearchInput] = useState('');
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${searchInput}`
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        console.log(data);
        setCountryData(data);
      } catch (error) {
        console.log('catch:', error);
      }
    };

    fetchCountryData();
  }, [searchInput]);

  return (
    <section className={`search-filter-container`}>
      <SearchBar value={value} />
      <Filter />
    </section>
  );
};

export default SearchFilterContainer;
