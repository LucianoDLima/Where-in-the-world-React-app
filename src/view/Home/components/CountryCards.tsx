import CardFlag from './CardFlag';
import { CountriesType } from '../../../types';
import { useNavigate } from 'react-router-dom';
import { Fragment, KeyboardEvent } from 'react';
import useFilteredData from '../../../hooks/useFilteredData';
import List from '../../../components/Common/List';

/**
 * Render list of country cards displaying information about each country.
 */
function CountryCards() {
  const filteredCountries = useFilteredData();
  const navigate = useNavigate();

  // Handle key press if user is navigating with a keyboard
  function goToDetailsPage(to: string) {
    return function handleKeyPress(e: KeyboardEvent<HTMLLIElement>) {
      const enterKey = e.key === 'Enter';

      if (enterKey) navigate(to);
    };
  }

  return filteredCountries.map((data: CountriesType, index: number) => {
    const countryDetails = [
      { label: 'Population: ', value: data.population },
      { label: 'Region: ', value: data.region },
      { label: 'Capital: ', value: data.capital },
    ];

    return (
      <li
        tabIndex={0}
        key={index}
        role='link'
        className='flex w-full min-w-[16.5rem] max-w-72 flex-col overflow-hidden rounded-md bg-primary text-primary shadow-foggy md:max-w-64'
        onKeyUp={goToDetailsPage(data.name.common)}
      >
        <CardFlag country={data.name.common} flag={data.flags.svg} />

        <div className='px-6 pb-10 pt-6'>
          <h2 className='mb-4 text-lg font-semibold'>{data.name.common}</h2>

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
