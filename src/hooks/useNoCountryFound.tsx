import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDataStatusContext } from "../context/useDataStatus";
import { useCountryDataContext } from "../context/useCountryData";

/**
 * Direct user to error page if no country with URL id name is found
 */
function useNoCountryFound() {
  const { id } = useParams();
  const { status } = useDataStatusContext();
  const { countries } = useCountryDataContext();
  const [isCountryFound, setIsCountryFound] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(() => {
    // Ensure it only runs after data has been retrieved
    if (!status.isRetrieved) {
      return;
    }

    // Check if country exists in the retrieved data (countryDataContext)
    if (
      countries.find(
        (country) => country.name.common.toLowerCase() === id?.toLowerCase(),
      )
    ) {
      setIsCountryFound(true);
      return;
    }

    setIsCountryFound(false);
  }, [id, countries, status.isRetrieved]);

  return isCountryFound;
}

export default useNoCountryFound;
