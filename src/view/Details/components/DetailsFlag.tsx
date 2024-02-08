import { CountriesType } from '../../../types';

type DetailsFlagProps = {
  id?: string;
  countries: CountriesType[];
};

/**
 * Render the flag image for the details page
 */
function DetailsFlag({ id, countries }: DetailsFlagProps) {
  return countries
    .filter((country) => country.name.common.toLocaleLowerCase() === id?.toLocaleLowerCase())
    .map((country) => (
      <div key={country.name.common} className='mx-auto max-w-[28rem] min-h-52 md:mx-0 md:max-w-[34rem]'>
        <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      </div>
    ));
}

export default DetailsFlag;
