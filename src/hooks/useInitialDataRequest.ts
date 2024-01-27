import { useEffect } from "react";
import { useCountryContext } from "../context/useCountries";
import { fetchData } from "../service/fetchData";
import { useStatusContext } from "../context/useStatus";

/**
 * Fetch data during mounting
 *
 * @returns {void}
 */
export default function useInitialDataRequest(): void {
  const { setCountries } = useCountryContext();
  const { status, setStatus } = useStatusContext();

  useEffect(() => {
    // Ensures no more requests are made after data has been retrieved
    // TODO: Need to look up if this is a good way of going about it
    if (status.isRetrieved) return;

    async function fetchDataAndUpdateCountry() {
      try {
        const data = await fetchData();
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
