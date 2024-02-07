import useInitialDataRequest from '../../hooks/useInitialDataRequest';
import CardsContainer from './components/CardsContainer';
import MainWrapper from '../../components/Common/MainWrapper';
import FilterWrapper from '../Filter';

const HomeBody = () => {
  useInitialDataRequest();

  return (
    <>
      <FilterWrapper />

      <MainWrapper>
        <h1 className='sr-only'>Countries across the world</h1>
        <CardsContainer />
      </MainWrapper>
    </>
  );
};

export default HomeBody;
