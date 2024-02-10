import CardFlag from './CardFlag';
import { CountriesType } from '../../../types';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import useFilteredData from '../../../hooks/useFilteredData';
import List from '../../../components/Common/List';

/**
 * Render list of country cards displaying information about each country.
 */
function CountryCards() {
  const filteredCountries = useFilteredData();

  return filteredCountries.map((data: CountriesType, index: number) => {
    const countryDetails = [
      { label: 'Population: ', value: data.population },
      { label: 'Region: ', value: data.region },
      { label: 'Capital: ', value: data.capital },
    ];

    return (
      <li
        key={index}
        className='relative flex w-full min-w-[16.5rem] max-w-72 flex-col overflow-hidden rounded-md bg-primary text-primary shadow-foggy focus-within:outline md:max-w-64'
      >
        <CardFlag country={data.name.common} flag={data.flags.svg} />

        <div className='px-6 pb-10 pt-6'>
          <Link
            to={data.name.common}
            className='mb-4 inline-block text-lg font-semibold after:absolute after:left-0 after:right-0 after:top-0 after:h-40 hover:underline focus:outline-none'
          >
            <h2>{data.name.common}</h2>
          </Link>

          <List className='flex flex-col gap-1 text-sm font-semibold'>
            {countryDetails.map((item, i) => (
              <Fragment key={i}>
                {item.label} <span className='font-light'>{item.value}</span>
              </Fragment>
            ))}
          </List>
        </div>
      </li>
    );
  });
}

export default CountryCards;
