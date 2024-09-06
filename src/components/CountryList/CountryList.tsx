import { Country } from '../../../types/Country';

interface CountryListProps {
  countries: Country[];
}

export const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <img src={country.flags.png} alt="" />
            <h2>{country.name.common}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};
