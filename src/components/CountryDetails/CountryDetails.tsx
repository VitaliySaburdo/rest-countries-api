import { Link } from 'react-router-dom';
import { Country } from '../../../types/Country';

interface CountryDetailsProps {
  country: Country;
  countries: Country[];
}

export const CountryDetails: React.FC<CountryDetailsProps> = ({
  country,
  countries,
}) => {
  const {
    flags: { png },
    name: { common, nativeName },
    population,
    region,
    subregion,
    capital,
    currencies,
    languages,
    altSpellings,
    borders,
  } = country;

  const keyNativeName = Object.keys(nativeName)[0];
  const keyCurrencies = Object.keys(currencies)[0];
  const lang = Object.values(languages).join(', ');
  const formattedNumber = population.toLocaleString('en-US');

  const borderCountries = [];
  for (const country of countries) {
    if (borders) {
      if (borders.includes(country.cca3)) {
        borderCountries.push(country.name.common);
      }
    }
  }

  return (
    <>
      <img src={png} alt="flag" />
      <h2>{common}</h2>
      <p>Native Name: {nativeName[keyNativeName].common}</p>
      <p>Population: {formattedNumber}</p>
      <p>Region: {region}</p>
      <p>Sub Region: {subregion}</p>
      <p>Capital: {capital}</p>
      <p>Top Level Domain: {altSpellings[0].toLowerCase()}</p>
      <p>Currencies: {currencies[keyCurrencies].name}</p>
      <p>Languages: {lang}</p>

      <ul>
        Border Countries:
        {borderCountries.length
          ? borderCountries.map((country) => {
              return (
                <Link key={country} to={`/country/${country}`}>
                  <li>
                    <p>{country}</p>
                  </li>
                </Link>
              );
            })
          : '  none'}
      </ul>
    </>
  );
};
