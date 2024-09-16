import { Link } from 'react-router-dom';
import { useTheme } from '../../context/useTheme';
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
  const { theme } = useTheme();
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
            <div className={style.shell}>
              {' '}
              <p className={style.txt}>
                <span className={style.boldTxt}>Native Name:</span>
                {nativeName[keyNativeName].common}
              </p>
              <p className={style.txt}>
                {' '}
                <span className={style.boldTxt}>Population:</span>{' '}
                {formattedNumber}
              </p>
              <p className={style.txt}>
                {' '}
                <span className={style.boldTxt}>Region:</span>
                {region}
              </p>
              <p className={style.txt}>
                {' '}
                <span className={style.boldTxt}>Sub Region:</span> {subregion}
              </p>
              <p className={style.txt}>
                {' '}
                <span className={style.boldTxt}>Capital:</span> {capital}
              </p>
            </div>
            <div>
              {' '}
              <p className={style.txt}>
                {' '}
                <span className={style.boldTxt}>Top Level Domain:</span>{' '}
                {altSpellings[0].toLowerCase()}
              </p>
              <p className={style.txt}>
                {' '}
                <span className={style.boldTxt}>Currencies:</span>{' '}
                {currencies[keyCurrencies].name}
              </p>
              <p className={style.txt}>
                {' '}
                <span className={style.boldTxt}>Languages:</span> {lang}
              </p>
            </div>
          </div>
          <ul className={style.list}>
            Border Countries:
            {borderCountries.length ? (
              borderCountries.map((country) => {
                return (
                  <Link
                    className={
                      theme === 'dark'
                        ? `${style.link} ${style.darkMode}`
                        : style.link
                    }
                    key={country}
                    to={`/country/${country}`}
                  >
                    <li>
                      <p>{country}</p>
                    </li>
                  </Link>
                );
              })
            ) : (
              <p style={{ fontWeight: '600' }}>none</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
