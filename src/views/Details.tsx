import { useParams } from "react-router-dom";
import { useCountryDataContext } from "../context/useCountryData";
import useInitialDataRequest from "../hooks/useInitialDataRequest";
import DetailsDescription from "../components/Layout/Details/DetailsDescription";
import DetailsFlag from "../components/Layout/Details/DetailsFlag";
import useNoCountryFound from "../hooks/useNoCountryFound";
import SRH1 from "../components/Common/SRH1";
import Button from "../components/Controls/AnchorButton";
import MainWrapper from "../components/Common/MainWrapper";

const DetailsPage = () => {
  const { id } = useParams();
  const { countries } = useCountryDataContext();

  // Will only run here if user refreshes the page or go to this page through the URL
  useInitialDataRequest();

  useNoCountryFound();

  return (
    <MainWrapper>
      <SRH1 />

      <div className="flex flex-col text-primary @container">
        <div className="my-8">
          <Button hasIcon={true} text="Back" to="../" />
        </div>

        <div className="grid gap-x-4 md:grid-cols-2">
          <DetailsFlag countries={countries} id={id} />
          <DetailsDescription countries={countries} id={id} />
        </div>
      </div>
    </MainWrapper>
  );
};

export default DetailsPage;
