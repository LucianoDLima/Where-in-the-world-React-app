import React, { useEffect, useState } from 'react';
import CountryCards from '../../components/CountryCards/CountryCards';
import SearchFilterContainer from '../../components/SearchFilterContainer/SearchFilterContainer';
import Main from '../Main/Main';

const Base = () => {
  const [countryData, setCountryData] = useState([]);

  // Fetches all the countries
  useEffect(() => {
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
  }, []);

  return (
    <>
      <SearchFilterContainer />
      <main>
      {countryData.map((country) => (
        <CountryCards
          key={country.name.common}
          flag={country.flags.svg}
          flagAlt={country.flags.alt}
          countryName={country.name.common}
          population={country.population
            .toLocaleString()
            .replace(/,/g, '.')}
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
