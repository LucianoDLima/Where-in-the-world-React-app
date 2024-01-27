import FilterWrapper from "../../components/Common/FilterWrapper";
import { useCountryContext } from "../../context/useCountries";
import useInitialDataRequest from "../../hooks/useInitialDataRequest";
import CountryCards from "../../components/Common/CountryCards";
import { useStatusContext } from "../../context/useStatus";
import SkeletonCard from "../../components/Common/SkeletonCard";

const Base = () => {
  const { countries } = useCountryContext();
  const { status } = useStatusContext();

  useInitialDataRequest();

  const skeletonCards = Array.from({ length: 16 }, (_, index) => index);

  return (
    <>
      <FilterWrapper />
      <h1 className="sr-only">Countries across the world</h1>
      {status.isLoading ? (
        <main>
          {skeletonCards.map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </main>
      ) : (
        <main>{countries && <CountryCards />}</main>
      )}
    </>
  );
};

export default Base;
