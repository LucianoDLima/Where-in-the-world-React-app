import { Fragment } from 'react';
import List from '../../../components/Common/List';
import { getAllProperties, getDeeperProperty } from '../../../hooks/useObjectMaps';
import { CountriesType } from '../../../types';
import DetailsBorder from './DetailsBorder';
import { cn } from '../../../libs/utils';

type DetailsDescriptionProps = {
  id?: string;
  countries: CountriesType[];
};

/**
 * Render the list of descriptions for the current country
 */
function DetailsDescription({ id, countries }: DetailsDescriptionProps) {
  return countries
    .filter((country) => country.name.common.toLocaleLowerCase() === id?.toLocaleLowerCase())
    .map((country, index) => {
      const countryDetails = [
        { label: 'Native Name:', value: country.name.official },
        { label: 'Continent:', value: getAllProperties(country.continents) },
        { label: 'Region:', value: country.region },
        { label: 'Sub region:', value: country.subregion },
        { label: 'Capital:', value: country.capital },
        { label: 'Population:', value: country.population.toLocaleString().replace(/,/g, '.') },
        { label: 'Top level domain:', value: getAllProperties(country.tld) },
        { label: 'Currencies:', value: getDeeperProperty(country.currencies, 'name') },
        { label: 'Languages:', value: getAllProperties(country.languages) },
        { label: 'Drive side:', value: country.car.side },
      ];

      return (
        <div key={index} className='mx-auto max-w-[28rem] w-full pb-10 pt-6 text-2xl md:text-3xl'>
          <h1 className='mb-4 font-semibold'>{country.name.common}</h1>

          <List className='grid gap-1 text-sm font-semibold @[28rem]:grid-cols-2 @[40rem]:gap-x-2'>
            {countryDetails.map((item, i) => (
              <Fragment key={i}>
                {item.label}{' '}
                <span className={cn('font-light', i === countryDetails.length - 1 && 'capitalize')}>
                  {item.value}
                </span>
              </Fragment>
            ))}
          </List>

          <DetailsBorder data={country} />
        </div>
      );
    });
}

export default DetailsDescription;
