import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDataStatusContext } from "../context/useDataStatus";
import { useCountryDataContext } from "../context/useCountryData";

/**
 * Direct user to error page if no country with URL id name is found
 */
function useNoCountryFound() {
  const { id } = useParams();
  const { status } = useDataStatusContext();
  const { countries } = useCountryDataContext();
  const navigate = useNavigate();

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
      return;
    }

    // If it doesn't exist, direct user to error page
    return navigate("../error");
  }, [id, status.isRetrieved]);
}

export default useNoCountryFound;
