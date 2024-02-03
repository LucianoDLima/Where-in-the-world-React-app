import FilterWrapper from "../components/Layout/Filter/FilterWrapper";
import useInitialDataRequest from "../hooks/useInitialDataRequest";
import CardsContainer from "../components/Layout/Card/CardsContainer";
import SRH1 from "../components/Common/SRH1";
import MainWrapper from "../components/Common/MainWrapper";

const HomeBody = () => {
  useInitialDataRequest();

  return (
    <>
      <FilterWrapper />

      <SRH1 />

      <MainWrapper>
        <CardsContainer />
      </MainWrapper>
    </>
  );
};

export default HomeBody;
