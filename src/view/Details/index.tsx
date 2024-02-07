import { useParams } from 'react-router-dom';
import { useCountryDataContext } from '../../context/useCountryData';
import useInitialDataRequest from '../../hooks/useInitialDataRequest';
import DetailsDescription from './components/DetailsDescription';
import DetailsFlag from './components/DetailsFlag';
import useNoCountryFound from '../../hooks/useNoCountryFound';
import Button from '../../components/Controls/AnchorButton';
import MainWrapper from '../../components/Common/MainWrapper';
import ErrorPage from '../Error';

const DetailsPage = () => {
  const { id } = useParams();
  const { countries } = useCountryDataContext();

  // Will only run here if user refreshes the page or go to this page through the URL
  useInitialDataRequest();

  const countryFound = useNoCountryFound();

  return (
    <MainWrapper>
      {countryFound === undefined ? null : countryFound ? (
        <div className='flex flex-col text-primary @container'>
          <div className='my-8'>
            <Button hasIcon={true} text='Back' to='../' />
          </div>

          <div className='grid gap-x-4 md:grid-cols-2'>
            <DetailsFlag countries={countries} id={id} />
            <DetailsDescription countries={countries} id={id} />
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </MainWrapper>
  );
};

export default DetailsPage;
