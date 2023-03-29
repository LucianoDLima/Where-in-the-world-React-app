import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../pages/Error/Error';
import Button from '../Button/Button';
import arrowLight from '../../images/pointer-arrow-light.svg';
import arrowDark from '../../images/pointer-arrow-dark.svg';
import { ThemeContext } from '../../context/ThemeContext';

const CountryLink = () => {
  const { theme } = useContext(ThemeContext);
  const param = useParams();
  const [countryData, setCountryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error404, setError404] = useState(false);

  useEffect(() => {
    const fetchCountryName = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${param.id}`
        );

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        console.log(data);
        setCountryData(data[0]);
        setLoading(false);
        setError404(false);
      } catch (error) {
        console.log('yes');
        setError404(true);
        setLoading(false);
      }
    };
    fetchCountryName();
  }, [param.id]);

  return (
    <section className="country-detail">
      {error404 ? (
        <Error />
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <div className="country-detail__container">
          <Button
            image={theme ? arrowDark : arrowLight}
            text="Back"
            to="/"
            className="back-button"
          />
          <div className="country-detail__information">
            <div className="country-detail__image-box">
              <img src={countryData.flags.svg} />
            </div>

            <div className="country-detail__information-content">
              <h2>{countryData.name.common}</h2>

              <ul className="country-detail__general">
                {[
                  {
                    label: 'Native Name',
                    value:
                      countryData.name.nativeName[
                        Object.keys(countryData.name.nativeName)[0]
                      ].common,
                  },
                  {
                    label: 'Population',
                    value: countryData.population
                      .toLocaleString()
                      .replace(/,/g, '.'),
                  },
                  { label: 'Region', value: countryData.region },
                  { label: 'Sub Region', value: countryData.subregion },
                  { label: 'Capital', value: countryData.capital},
                  { label: 'Top Level Domain', value: countryData.tld},
                  { label: 'Currencies', value: Object.keys(countryData.currencies)
                  .map((currency) => countryData.currencies[currency].name)
                  .join(", ")},
                  { label: 'Language', value: Object.keys(countryData.languages).map(lang => countryData.languages[lang]).join(", ")},
                  { label: 'Driving side', value: countryData.car.side}
                ].map(({ label, value }) => (
                  <li key={label}>
                    <p>
                      {label}: <span>{value}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CountryLink;
