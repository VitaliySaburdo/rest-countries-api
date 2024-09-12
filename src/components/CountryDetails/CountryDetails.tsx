import { Link } from 'react-router-dom';
import { Country } from '../../../types/Country';
import style from './CountryDetails.module.scss';

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
      <div className={style.wrapper}>
        <img className={style.img} src={png} alt="flag" />
        <div style={{ flex: '1' }}>
          <h2 className={style.title}>{common}</h2>
          <div className={style.textWrapper}>
            <div>
              {' '}
              <p>
                <span className={style.boldTxt}>Native Name: </span>
                {nativeName[keyNativeName].common}
              </p>
              <p>
                {' '}
                <span className={style.boldTxt}>Population: </span>{' '}
                {formattedNumber}
              </p>
              <p>Region: {region}</p>
              <p>Sub Region: {subregion}</p>
              <p>Capital: {capital}</p>
            </div>
            <div>
              {' '}
              <p>Top Level Domain: {altSpellings[0].toLowerCase()}</p>
              <p>Currencies: {currencies[keyCurrencies].name}</p>
              <p>Languages: {lang}</p>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
};
