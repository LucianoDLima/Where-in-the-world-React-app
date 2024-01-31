import FilterWrapper from "../components/Layout/Filter/FilterWrapper";
import useInitialDataRequest from "../hooks/useInitialDataRequest";
import CardsContainer from "../components/Layout/Card/CardsContainer";
import SRH1 from "../components/Common/SRH1";

const HomeBody = () => {
  useInitialDataRequest();

  return (
    <>
      <FilterWrapper />

      <SRH1 />

      <main className="mx-auto max-w-screen-xl px-4">
        <CardsContainer />
      </main>
    </>
  );
};

export default HomeBody;
