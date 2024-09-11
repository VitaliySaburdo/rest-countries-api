import { useParams, useLocation, Link } from 'react-router-dom';
import { Container } from '../../components/Container';
import { Country } from '../../../types/Country';
import { CountryDetails } from '../../components/CountryDetails';

interface CountryPageProps {
  countries: Country[];
}

const CountryPage: React.FC<CountryPageProps> = ({ countries }) => {
  const { country } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const countryData = countries.find(
    (countryItem) => country === countryItem.name.common
  );

  return (
    <>
      <Container>
        <Link to={backLinkHref}>Back</Link>
        <CountryDetails country={countryData} />
      </Container>
    </>
  );
};
export default CountryPage;
