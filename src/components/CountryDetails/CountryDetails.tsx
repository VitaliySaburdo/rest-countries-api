import { Country } from '../../../types/Country';

interface CountryDetailsProps {
  country: Country[];
}

export const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
  console.log(country);
  return (
    <>
      <img src={country[0].flags.png} alt="flag" />
      <h2>{country[0].name.common}</h2>
      <p>Native Name: {country[0].name.official}</p>
    </>
  );
};
