import FilterWrapper from "../../components/Common/FilterWrapper";
import useInitialDataRequest from "../../hooks/useInitialDataRequest";
import CardsContainer from "../Main/CardsContainer";

const Base = () => {
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

export default Base;
