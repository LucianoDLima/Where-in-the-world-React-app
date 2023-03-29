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
  
  const [loading, setLoading] = useState(true);
  const [countryData, setCountryData] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);
  const [error404, setError404] = useState(false);

  console.log('border:', borderCountries);


  // This will fetch the data of the previously clicked country on the main page plus its borders if it has one
  useEffect(() => {
    const fetchCountryData = async () => {
      // Previously clicked country
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${param.id}?fullText=true`
        );
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        
        setCountryData(data[0]);

        // checks if the country has borders
        const borders = data[0]?.borders;
        // if country has at least one border, the next API is called
        if (borders && borders.length > 0) {
          const borderPromises = borders.map((border) =>
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          );
          const borderResponses = await Promise.all(borderPromises);

          const borderDataPromises = borderResponses.map((response) =>
            response.json()
          );
          const borderData = await Promise.all(borderDataPromises);
          setLoading(false);
          setError404(false);
          console.log(borderData);
          setBorderCountries(borderData);
        } else {
          setLoading(false);
          setError404(false);
        }
      } catch (error) {
        setError404(true);
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [param.id]);

  return (
    <section className="country-detail">
      {/* It checks if loading is still true,
      then if there's an error after API is called,
      and only then it will render the page with an error or the content*/}
      {loading ? (
        <p>Loading...</p>
        ) : error404 ? (
        <Error />
      ) : (
        <div className="country-detail__container">
          <Button
            image={theme ? arrowDark : arrowLight}
            text="Back"
            to="/"
            className="back-button"
            click={() => setLoading(true)}
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
                  { label: 'Capital', value: countryData.capital },
                  { label: 'Top Level Domain', value: countryData.tld },
                  {
                    label: 'Currencies',
                    value: Object.keys(countryData.currencies)
                      .map((currency) => countryData.currencies[currency].name)
                      .join(', '),
                  },
                  {
                    label: 'Language',
                    value: Object.keys(countryData.languages)
                      .map((lang) => countryData.languages[lang])
                      .join(', '),
                  },
                  { label: 'Driving side', value: countryData.car.side },
                ].map(({ label, value }) => (
                  <li key={label}>
                    <p>
                      {label}: <span>{value}</span>
                    </p>
                  </li>
                ))}
              </ul>

              <div className="country-details__borders">
                <p>Border Countries:</p>
                <ul>
                  {borderCountries.length === 0 ? 'No border countries' : Object.keys(countryData.borders).map((border, index) => (
                    <li key={countryData.borders[border]}>
                      <Button
                        text={countryData.borders[border]}
                        to={`../${borderCountries[index][0].name.common}`}
                        click={() => setLoading(true)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CountryLink;
