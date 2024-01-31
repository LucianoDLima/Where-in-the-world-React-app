import { useParams } from "react-router-dom";
import { useCountryDataContext } from "../context/useCountryData";
import useInitialDataRequest from "../hooks/useInitialDataRequest";
import DetailsDescription from "../components/Layout/Details/DetailsDescription";
import DetailsFlag from "../components/Layout/Details/DetailsFlag";
import useNoCountryFound from "../hooks/useNoCountryFound";
import SRH1 from "../components/Common/SRH1";

const DetailsPage = () => {
  const { id } = useParams();
  const { countries } = useCountryDataContext();

  // Will only run here if user refreshes the page or go to this page through the URL
  useInitialDataRequest();

  useNoCountryFound();

  return (
    <main className="justify- mx-auto flex max-w-screen-xl flex-col items-center gap-x-4 px-4 text-primary @container md:grid-cols-2 md:flex-row ">
      <SRH1 />

      <DetailsFlag countries={countries} id={id} />
      <DetailsDescription countries={countries} id={id} />
    </main>
  );
};

export default DetailsPage;
