import { Link } from 'react-router-dom'

const CountryCards = ({flag, flagAlt, countryName, population, region, capital, to}: any) => {
  return (
    <div className='country-card__container' >
      <Link className='country-card__flag' to={to}>
        <img src={flag} alt={flagAlt} />
      </Link>

      <h2 className='country-card__name'>{countryName}</h2>

      <div className='country-card__information'>
        <p>Population: <span>{population}</span></p>
        <p>Region: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </div>
    </div>
  )
}

export default CountryCards