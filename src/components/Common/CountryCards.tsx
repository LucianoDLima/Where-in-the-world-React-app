import CardFlag from "./CardFlag";
import CardDescription from "./CardDescription";
import { CountriesType } from "../../types";
import { useNavigate } from "react-router-dom";
import { KeyboardEvent } from "react";
import useFilteredData from "../../hooks/useFilteredData";

/**
 * Render list of country cards displaying information about each country.
 *
 * @returns {JSX.Element}
 */
function CountryCards() {
  const filteredCountries = useFilteredData();
  const navigate = useNavigate();

  // Handle key press if user is navigating with a keyboard
  function goToDetailsPage(to: string) {
    return function handleKeyPress(e: KeyboardEvent<HTMLDivElement>): void {
      const enterKey = e.key === "Enter";

      if (enterKey) {
        // This fixed a bug that I forgot and can't reproduce
        // Will leave it commented for now just in case...
        // setFilter((prev) => ({
        //   ...prev,
        //   select: undefined,
        // }));

        navigate(to);
      }
    };
  }

  return (
    <>
      {filteredCountries.map((data: CountriesType, index: number) => (
        <div
          tabIndex={0}
          key={index}
          role="link"
          className="flex w-full max-w-72 flex-col overflow-hidden rounded-md bg-primary text-primary shadow-foggy md:max-w-64"
          onKeyUp={goToDetailsPage(data.name.common)}
        >
          <CardFlag country={data.name.common} flag={data.flags.svg} />

          <CardDescription
            country={data.name.common}
            population={data.population.toLocaleString().replace(/,/g, ".")}
            region={data.region}
            capital={data.capital}
          />
        </div>
      ))}
      ;
    </>
  );
}

export default CountryCards;
