import { Link } from "react-router-dom";

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
 *
 * @returns {JSX.Element}
 */
function CardFlag({ flag, country }: CardFlagType) {
  return (
    <Link tabIndex={-1} className="h-40" to={country}>
      <img
        className="h-full w-full object-cover"
        src={flag}
        alt={`${country} flag`}
      />
    </Link>
  );
}

export default CardFlag;
