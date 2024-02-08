import { useNavigate, useParams } from 'react-router-dom';
import { useCountryDataContext } from '../../context/useCountryData';
import useInitialDataRequest from '../../hooks/useInitialDataRequest';
import DetailsDescription from './components/DetailsDescription';
import DetailsFlag from './components/DetailsFlag';
import useNoCountryFound from '../../hooks/useNoCountryFound';
import AnchorButton from '../../components/Controls/AnchorButton';
import MainWrapper from '../../components/Common/MainWrapper';
import ErrorPage from '../Error';

const DetailsPage = () => {
  const { id } = useParams();
  const { countries } = useCountryDataContext();
  const navigate = useNavigate();

  // Will only run here if user refreshes the page or go to this page through the URL
  useInitialDataRequest();

  const countryFound = useNoCountryFound();

  if (countryFound === false) {
    return <ErrorPage />;
  }

  return (
    <MainWrapper>
      <div className='flex flex-col text-primary @container'>
        <div className='my-8'>
          <AnchorButton hasIcon={true} text='Back' onClick={() => navigate(-1)} to='' />
        </div>

        <div className='grid gap-x-4 md:grid-cols-2'>
          <DetailsFlag countries={countries} id={id} />
          <DetailsDescription countries={countries} id={id} />
        </div>
      </div>
    </MainWrapper>
  );
};

export default DetailsPage;
