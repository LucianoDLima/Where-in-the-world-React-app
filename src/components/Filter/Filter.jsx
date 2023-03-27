import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import arrowIconDark from '../../images/arrow-dark.svg';
import arrowIconLight from '../../images/arrow-light.svg';

export const Filter = () => {
  const { theme } = useContext(ThemeContext);

  // Remove the 'Filter by Region' text once you select an option
  const [filterName, setFilterName] = useState('Filter by Region');
  const toggleFilterName = () => {
    setFilterName('');
  };

  return (
    <div className={`filter-container ${!theme ? '' : 'light-mode'}`}>
      <label htmlFor="country-options" className="filter-title">
        <p>{filterName}</p>
      </label>

      <label htmlFor="country-options" className="filter-arrow-icon">
        <img src={!theme ? arrowIconDark : arrowIconLight} />
      </label>

      <select
        autoComplete="off"
        id="country-options"
        onChange={toggleFilterName}
      >
        <option disabled selected></option>
        <option>All</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
};
