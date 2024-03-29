import { useNavigate } from 'react-router-dom';
import AnchorButton from '../../components/Controls/AnchorButton';
import MainWrapper from '../../components/Common/MainWrapper';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <div className='my-6 w-full text-center'>
        <div className='my-8'>
          <AnchorButton hasIcon={true} text='Back' onClick={() => navigate(-1)} to='' />
        </div>
        <h1 className='text-5xl'>Error 404</h1>
        <p className='text-lg'>Sorry, no countries found.</p>
      </div>
    </MainWrapper>
  );
}

export default ErrorPage;
