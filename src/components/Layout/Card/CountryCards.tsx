import CardFlag from "./CardFlag";
import { CountriesType } from "../../../types";
import { useNavigate } from "react-router-dom";
import { KeyboardEvent } from "react";
import useFilteredData from "../../../hooks/useFilteredData";
import DescriptionContainer from "../../Common/DescriptionContainer";
import DescriptionContent from "../../Common/DescriptionContent";

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
    return function handleKeyPress(e: KeyboardEvent<HTMLLIElement>): void {
      const enterKey = e.key === "Enter";

      if (enterKey) navigate(to);
    };
  }

  return (
    <>
      {filteredCountries.map((data: CountriesType, index: number) => (
        <li
          tabIndex={0}
          key={index}
          role="link"
          className="flex w-full min-w-[16.5rem] max-w-72 flex-col overflow-hidden rounded-md bg-primary text-primary shadow-foggy md:max-w-64"
          onKeyUp={goToDetailsPage(data.name.common)}
        >
          <CardFlag country={data.name.common} flag={data.flags.svg} />

          <DescriptionContainer title={data.name.common}>
            <DescriptionContent
              list={[
                {
                  label: "Population: ",
                  value: data.population.toLocaleString().replace(/,/g, "."),
                },
                { label: "Region: ", 
                  value: data.region 
                },
                { label: "Capital: ", 
                value: data.capital 
                },
              ]}
            />
          </DescriptionContainer>
        </li>
      ))}
    </>
  );
}

export default CountryCards;