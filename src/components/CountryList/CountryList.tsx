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
        {countries.map((country, index) => (
          <CountryItem key={index} country={country} />
        ))}
      </ul>
    </>
  );
};
