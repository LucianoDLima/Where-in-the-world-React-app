import { useEffect, useState } from 'react';
import { useCountryDataContext } from '../context/useCountryData';
import { useDataFilterContext } from '../context/useDataFilter';
import { CountriesType } from '../types';

/**
 * Handle both search and select filters logic
 */
export default function useFilteredData(): CountriesType[] {
  const { countries } = useCountryDataContext();
  const { filter } = useDataFilterContext();
  const [filteredCountries, setFilteredCountries] = useState<CountriesType[]>([]);

  useEffect(() => {
    function filterByRegion(country: CountriesType): boolean {
      // Ensures proper loading on mounting and/or if user selects "All" option
      const allCountries = filter.select === undefined || filter.select === 'All';

      if (allCountries) {
        return true;
      }

      return country.region === filter.select;
    }

    // Filter by search input
    function filterBySearch(country: CountriesType): boolean {
      if (!filter.search) {
        return true;
      }
      return country.name.common.toLowerCase().includes(filter.search.toLowerCase());
    }

    // Filter countries based on both filters above
    // for when users selects an option and then write in the search input
    const filtered = countries.filter((country: CountriesType) => {
      return filterByRegion(country) && filterBySearch(country);
    });

    setFilteredCountries(filtered);
  }, [filter.select, filter.search, countries]);

  return filteredCountries;
}
