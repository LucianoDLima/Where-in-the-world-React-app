import { useEffect } from 'react';
import { useCountryDataContext } from '../context/useCountryData';
import { fetchData } from '../service/fetchData';
import { useDataStatusContext } from '../context/useDataStatus';

/**
 * Fetch data during mounting
 */
export default function useInitialDataRequest(): void {
  const { setCountries } = useCountryDataContext();
  const { status, setStatus } = useDataStatusContext();

  useEffect(() => {
    // Ensure no more requests are made after data has been retrieved
    if (status.isRetrieved) return;

    async function fetchDataAndUpdateCountry() {
      try {
        setStatus((prev) => ({
          ...prev,
          isLoading: true,
        }));

        const data = await fetchData();

        // Sneaky, I know I know
        await new Promise((resolve) => setTimeout(resolve, 650));

        setStatus((prev) => ({
          ...prev,
          isLoading: false,
        }));

        setCountries(data);

        setStatus((prev) => ({
          ...prev,
          isRetrieved: true,
        }));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchDataAndUpdateCountry();
  }, [setCountries]);
}
