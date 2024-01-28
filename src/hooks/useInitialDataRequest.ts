import { useEffect } from "react";
import { useCountryDataContext } from "../context/useCountryData";
import { fetchData } from "../service/fetchData";
import { useDataStatusContext } from "../context/useDataStatus";

/**
 * Fetch data during mounting
 *
 * @returns {void}
 */
export default function useInitialDataRequest(): void {
  const { setCountries } = useCountryDataContext();
  const { status, setStatus } = useDataStatusContext();

  useEffect(() => {
    // Ensures no more requests are made after data has been retrieved
    // TODO: Need to look up if this is a good way of going about it
    if (status.isRetrieved) return;

    async function fetchDataAndUpdateCountry() {
      try {
        setStatus((prev) => ({
          ...prev,
          isLoading: true,
        }));

        const data = await fetchData();

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
        console.error("Error fetching data: ", error);
      }
    }

    fetchDataAndUpdateCountry();
  }, [setCountries]);
}
