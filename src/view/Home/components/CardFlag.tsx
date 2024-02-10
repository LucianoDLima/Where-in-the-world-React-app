/**
 * Props for the CardFlag component
 *
 * @property {string} country - Link to the country page
 * @property {string} flag - Country flag image url
 */
type CardFlagType = {
  country: string;
  flag: string;
};

/**
 * Render the country flag in the anchor tag that takes user
 * to the details country page
 */
function CardFlag({ flag, country }: CardFlagType) {
  return (
    <div className='h-40'>
      <img className='h-full w-full object-cover' src={flag} alt={`${country} flag`} />
    </div>
  );
}

export default CardFlag;
