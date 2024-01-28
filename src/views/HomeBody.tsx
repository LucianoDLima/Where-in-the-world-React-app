import FilterWrapper from "../components/Layout/Filter/FilterWrapper";
import useInitialDataRequest from "../hooks/useInitialDataRequest";
import CardsContainer from "../components/Layout/Card/CardsContainer";

const HomeBody = () => {
  useInitialDataRequest();

  return (
    <>
      <FilterWrapper />

      <h1 className="sr-only">Countries across the world</h1>

      <main>
        <CardsContainer />
      </main>
    </>
  );
};

export default HomeBody;
