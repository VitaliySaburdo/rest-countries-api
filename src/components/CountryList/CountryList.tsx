import { Link } from 'react-router-dom';
import { Country } from '../../../types/Country';
import { CountryItem } from '../CountryItem';
import style from './CountryList.module.scss';

interface CountryListProps {
  currentItems: Country[];
}

export const CountryList: React.FC<CountryListProps> = ({ currentItems }) => {
  return (
    <>
      <ul className={style.list}>
        {currentItems.map((country) => (
          <Link
            to={`country/${country.name.common.toLowerCase()}`}
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
