import { Country } from '../../../types/Country';

interface CountryListProps {
  countries: Country[];
}

export const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country.name}</li>
        ))}
      </ul>
    </>
  );
};
