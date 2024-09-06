import { Country } from '../../../types/Country';

interface CartItemProps {
  country: Country;
}

export const CountryItem: React.FC<CartItemProps> = ({ country }) => {
  return (
    <li>
      <img src={country.flags.png} alt="flag image" />
      <h2>{country.name.common}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </li>
  );
};
