import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../../pages/Error/Error';
import Button from '../Button/Button';
import arrowLight from '../../images/pointer-arrow-light.svg';
import arrowDark from '../../images/pointer-arrow-dark.svg';
import { ThemeContext } from '../../context/ThemeContext';

const CountryLink = () => {
  const { theme } = useContext(ThemeContext)
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
    <section className='country-detail'>
      {error404 ? (
        <Error />
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Button image={theme ? arrowDark : arrowLight} text='Back' to='/'/>
        </div>
      )}
    </section>
  );
};

export default CountryLink;
