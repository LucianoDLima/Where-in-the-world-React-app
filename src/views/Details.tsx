import { useParams } from "react-router-dom";
import { useCountryDataContext } from "../context/useCountryData";
import useInitialDataRequest from "../hooks/useInitialDataRequest";
import DetailsDescription from "../components/Layout/Details/DetailsDescription";
import DetailsFlag from "../components/Layout/Details/DetailsFlag";
import useNoCountryFound from "../hooks/useNoCountryFound";

const DetailsPage = () => {
  const { id } = useParams();
  const { countries } = useCountryDataContext();

  // Will only run here if user refreshes the page or go to this page through the URL
  useInitialDataRequest();

  useNoCountryFound();

  return (
    <main className="mx-auto grid max-w-screen-xl place-items-center gap-x-4 px-4 text-primary @container md:grid-cols-2">
      <DetailsFlag countries={countries} id={id} />
      <DetailsDescription countries={countries} id={id} />
    </main>
  );
};

export default DetailsPage;
