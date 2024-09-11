import { useParams, useLocation, Link } from 'react-router-dom';
import { Container } from '../../components/Container';
import { Country } from '../../../types/Country';
import { CountryDetails } from '../../components/CountryDetails';
import { useEffect, useState } from 'react';
import { getCountryByName } from '../../ApiService/ApiService';

const CountryPage = () => {
  const [country, setCountry] = useState<Country[]>();
  const { name } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchCountry = async () => {
      if (name)
        try {
          const data = await getCountryByName(name);
          setCountry(data);
        } catch (error) {
          console.log(error);
        }
    };
    fetchCountry();
  }, [name]);

  return (
    <>
      <Container>
        <Link to={backLinkHref}>Back</Link>
        {country && <CountryDetails country={country} />}
      </Container>
    </>
  );
};
export default CountryPage;
