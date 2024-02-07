import { useDataStatusContext } from '../../../context/useDataStatus';
import { useCountryDataContext } from '../../../context/useCountryData';
import CountryCards from './CountryCards';
import SkeletonCard from './SkeletonCard';

/**
 * Contain the list of country cards and their loading skeleton
 */
function CardsContainer() {
  const { status } = useDataStatusContext();
  const { countries } = useCountryDataContext();

  const skeletonCards = Array.from({ length: 16 }, (_, index) => index);

  return (
    <ul className='grid w-full grid-cols-[repeat(auto-fit,minmax(16.5rem,1fr))] justify-items-center gap-x-10 gap-y-10 pb-10  md:gap-x-16'>
      {status.isLoading
        ? skeletonCards.map((_, index) => <SkeletonCard key={index} />)
        : countries && <CountryCards />}
    </ul>
  );
}

export default CardsContainer;
