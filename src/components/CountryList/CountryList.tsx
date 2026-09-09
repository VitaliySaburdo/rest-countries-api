import { Link } from 'react-router-dom';
import { Country } from '../../../types/Country';
import { CountryItem } from '../CountryItem';
import style from './CountryList.module.scss';

interface CountryListProps {
  currentItems: Country[];
}

export const CountryList: React.FC<CountryListProps> = ({ currentItems }) => {
  console.log(currentItems)
  return (
    <>
      <ul className={style.list}>
        {currentItems.map((country) => (
          <li>
            <Link
              to={`country/${country.names.common.toLowerCase()}`}
              key={country.names.common}
              state={{ from: '/' }}
            >
              <CountryItem country={country} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
