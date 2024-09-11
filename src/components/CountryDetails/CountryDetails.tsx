import { Country } from '../../../types/Country';

interface CountryDetailsProps {
  country: Country | undefined;
}

export const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  return (
    <>
      <img src={country?.flags.png} alt="flag" />
      <h2>{country?.name.common}</h2>
      <p>Native Name: {country?.name.official}</p>
    </>
  );
};
