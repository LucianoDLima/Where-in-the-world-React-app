import { useCountryDataContext } from '../../../context/useCountryData';
import { CountriesType } from '../../../types';
import AnchorButton from '../../../components/Controls/AnchorButton';

type DetailsBorderProps = {
  data: CountriesType;
};

/**
 * Render a list of anchor buttons that direct user to its country page
 */
function DetailsBorder({ data }: DetailsBorderProps) {
  const { countries } = useCountryDataContext();

  /**
   * Check if one of the border codes match the cca3 (country code)
   */
  const getBorderCountryName = (borderCode: string): string | undefined => {
    const borderCountry = countries.find((countryCode) => countryCode.cca3 === borderCode);
    return borderCountry?.name.common;
  };

  return (
    <ul className='my-6 flex flex-wrap items-center gap-2 text-sm'>
      <p className='font-semibold'>Border Countries: </p>

      {data.borders?.length > 0 ? (
        data.borders.map((borderCode, index) => {
          const borderCountryName = getBorderCountryName(borderCode);

          if (borderCountryName) {
            return (
              <li key={index}>
                <AnchorButton
                  hasIcon={false}
                  text={data.borders[index]}
                  to={`/${borderCountryName}`}
                />
              </li>
            );
          } else {
            return null;
          }
        })
      ) : (
        <p>None</p>
      )}
    </ul>
  );
}

export default DetailsBorder;
