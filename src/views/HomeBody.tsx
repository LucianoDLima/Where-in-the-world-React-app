import FilterWrapper from "../components/Layout/Filter/FilterWrapper";
import useInitialDataRequest from "../hooks/useInitialDataRequest";
import CardsContainer from "../components/Layout/Card/CardsContainer";

const HomeBody = () => {
  useInitialDataRequest();

  return (
    <>
      <FilterWrapper />

      <h1 className="sr-only">Countries across the world</h1>

      <main className="mx-auto max-w-screen-xl px-4">
        <CardsContainer />
      </main>
    </>
  );
};

export default HomeBody;
