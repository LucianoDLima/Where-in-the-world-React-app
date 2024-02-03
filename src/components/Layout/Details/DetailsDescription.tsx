import DescriptionContainer from "../../Common/DescriptionContainer";
import DescriptionContent from "../../Common/DescriptionContent";
import {
  getAllProperties,
  getDeeperProperty,
} from "../../../hooks/useObjectMaps";
import { CountriesType } from "../../../types";
import DetailsBorder from "./DetailsBorder";

type DetailsDescriptionProps = {
  id?: string;
  countries: CountriesType[];
};

/**
 * Render the list of descriptions for the current country
 *
 * @param {DetailsDescriptionProps} props
 * @returns {JSX.Element[]}
 */
function DetailsDescription({ id, countries }: DetailsDescriptionProps) {
  return countries
    .filter(
      (country) =>
        country.name.common.toLocaleLowerCase() === id?.toLocaleLowerCase(),
    )
    .map((country) => (
      <DescriptionContainer
        key={country.name.common}
        title={country.name.common}
        titleSize="text-2xl md:text-3xl"
        containerPadding="px-0"
      >
        <DescriptionContent
          list={[
            {
              label: "Native name: ",
              value: country.name.official,
            },
            {
              label: "Continent: ",
              value: getAllProperties(country.continents),
            },
            {
              label: "Region: ",
              value: country.region,
            },
            {
              label: "Sub region: ",
              value: country.subregion,
            },
            {
              label: "Capital: ",
              value: country.capital,
            },
            {
              label: "Population: ",
              value: country.population.toLocaleString().replace(/,/g, "."),
            },
            {
              label: "Top level domain: ",
              value: getAllProperties(country.tld),
            },
            {
              label: "Currencies: ",
              value: getDeeperProperty(country.currencies, "name"),
            },
            {
              label: "Languages: ",
              value: getAllProperties(country.languages),
            },
            {
              label: "Drive side: ",
              value:
                country.car.side.charAt(0).toUpperCase() +
                country.car.side.slice(1),
            },
          ]}
        />

        <DetailsBorder data={country} />
      </DescriptionContainer>
    ));
}

export default DetailsDescription;
