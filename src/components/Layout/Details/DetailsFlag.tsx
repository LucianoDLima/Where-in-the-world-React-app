import { CountriesType } from "../../../types";

type DetailsFlagProps = {
  id?: string;
  countries: CountriesType[];
};

/**
 * Render the flag image for the details page
 *
 * @param {DetailsFlagProps} props
 * @returns {JSX.Element}
 */
function DetailsFlag({ id, countries }: DetailsFlagProps) {
  return countries
    .filter(
      (country) =>
        country.name.common.toLocaleLowerCase() === id?.toLocaleLowerCase(),
    )
    .map((country) => (
      <div
        key={country.name.common}
        className="mx-auto max-w-[28rem] md:max-w-[34rem]"
      >
        <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      </div>
    ));
}

export default DetailsFlag;
