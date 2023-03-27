import React, { useState, useEffect, useRef } from 'react';
import CountryCards from '../../components/CountryCards/CountryCards';

const Main = () => {
  const [countryData, setCountryData] = useState([]);
  const [visibleCountries, setVisibleCountries] = useState(30);

useEffect(() => {
  const fetchCountryData = async () => {
    try {
      const response = await fetch(
        'https://restcountries.com/v3.1/all'
      );
      const data = await response.json();
      setCountryData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchCountryData();
}, []);


  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {countryData.map((country) => (
        <CountryCards
          key={country.name.common}
          flag={country.flags.png}
          flagAlt={country.flags.alt}
          countryName={country.name.common}
          population={country.population
            .toLocaleString()
            .replace(/,/g, '.')}
          region={country.region}
          capital={country.capital}
        />
        
      ))}
    </main>
  );
};

export default Main;
