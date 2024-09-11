import { Link } from 'react-router-dom';
import { Country } from '../../../types/Country';
import { CountryItem } from '../CountryItem';
import style from './CountryList.module.scss';

interface CountryListProps {
  countries: Country[];
}

export const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <>
      <ul className={style.list}>
        {countries.map((country) => (
          <Link
            to={`country/${country.name.common}`}
            key={country.name.common}
            state={{ from: '/' }}
          >
            <CountryItem country={country} />
          </Link>
        ))}
      </ul>
    </>
  );
};
