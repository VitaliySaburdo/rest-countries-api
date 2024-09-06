import { Country } from '../../../types/Country';
import { CountryItem } from '../CountryItem';

interface CountryListProps {
  countries: Country[];
}

export const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <>
      <ul>
        {countries.map((country, index) => (
          <CountryItem key={index} country={country} />
        ))}
      </ul>
    </>
  );
};
