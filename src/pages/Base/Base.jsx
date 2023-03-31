import React, { useEffect, useState } from 'react';
import CountryCards from '../../components/CountryCards/CountryCards';
import SearchFilterContainer from '../../components/SearchFilterContainer/SearchFilterContainer';
import Main from '../Main/Main';

const Base = () => {
  const [countryData, setCountryData] = useState([]);
  const [allCountries, setAllCountries] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  // Fetches all the countries
  useEffect(() => {
    // The if is necessary so the API is called again when you delete the text inside the search input
    if (allCountries) {
      setAllCountries(false)
      const fetchCountryData = async () => {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all');
          const data = await response.json();
          setCountryData(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchCountryData();
    }
  }, [allCountries]);

  useEffect(() => {
    if (searchInput) {
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
      setAllCountries(false);
    } else {
      setAllCountries(true);
    }
  }, [searchInput]);

  const inputSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <SearchFilterContainer onChange={inputSearch} value={searchInput} />
      <main>
        {countryData.map((country) => (
          <CountryCards
            key={country.name.common}
            flag={country.flags.svg}
            flagAlt={country.flags.alt}
            countryName={country.name.common}
            population={country.population.toLocaleString().replace(/,/g, '.')}
            region={country.region}
            capital={country.capital}
            to={country.name.common}
          />
        ))}
      </main>
    </>
  );
};

export default Base;
