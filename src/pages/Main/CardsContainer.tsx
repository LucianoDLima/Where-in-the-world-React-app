import { useStatusContext } from "../../context/useStatus";
import { useCountryContext } from "../../context/useCountries";
import CountryCards from "../../components/Common/CountryCards";
import SkeletonCard from "../../components/Common/SkeletonCard";

/**
 * Contain the list of country cards and their loading skeleton
 *
 * @returns {JSX.Element}
 */
function CardsContainer() {
  const { status } = useStatusContext();
  const { countries } = useCountryContext();

  const skeletonCards = Array.from({ length: 16 }, (_, index) => index);

  return (
    <ul className="mx-auto grid w-full max-w-screen-xl justify-items-center gap-x-16 gap-y-10 px-4 pb-10  md:grid-cols-[repeat(auto-fit,minmax(16.5rem,1fr))]">
      {status.isLoading
        ? skeletonCards.map((_, index) => <SkeletonCard key={index} />)
        : countries && <CountryCards />}
    </ul>
  );
}

export default CardsContainer;
