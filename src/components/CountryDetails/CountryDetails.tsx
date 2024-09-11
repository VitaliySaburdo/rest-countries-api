import { Country } from '../../../types/Country';

interface CountryDetailsProps {
  country: Country;
}

export const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  const key = Object.keys(country.name.nativeName)[0];

  return (
    <>
      <img src={country.flags.png} alt="flag" />
      <h2>{country.name.common}</h2>
      <p>Native Name: {country.name.nativeName[key].common}</p>
    </>
  );
};
