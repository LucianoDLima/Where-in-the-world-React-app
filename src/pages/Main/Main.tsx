import { useState, useEffect } from 'react';
import CountryCards from '../../components/CountryCards/CountryCards';

const Main = ({ flag, flagAlt, countryName, population, region, capital, to }: any) => {
  const [countryData, setCountryData] = useState([]);

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

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <CountryCards
        flag={flag}
        flagAlt={flagAlt}
        countryName={countryName}
        population={population}
        region={region}
        capital={capital}
        to={to}
      />
      {countryData.map((country: any) => (
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
  );
};

export default Main;
