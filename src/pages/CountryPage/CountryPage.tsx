import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getCountryByName } from '../../ApiService/ApiService';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { CountryDetails } from '../../components/CountryDetails';
import { Country } from '../../../types/Country';
import IconBack from '../../assets/images/arrow-back.png';
import style from './CountryPage.module.scss';
import { useTheme } from '../../context/useTheme';

interface CountryPageProps {
  countries: Country[];
}

const CountryPage: React.FC<CountryPageProps> = ({ countries }) => {
  const [country, setCountry] = useState<Country>();
  const { name } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { theme } = useTheme();

  useEffect(() => {
    const fetchCountry = async () => {
      if (name)
        try {
          const data = await getCountryByName(name);
          setCountry(data[0]);
        } catch (error) {
          console.log(error);
        }
    };
    fetchCountry();
  }, [name]);

  return (
    <>
      <Section>
        <Container>
          <Link
            className={
              theme === 'dark' ? `${style.link} ${style.darkMode}` : style.link
            }
            to={backLinkHref}
          >
            <img
              className={
                theme === 'dark' ? style.darkModeIcon : style.lightModeIcon
              }
              src={IconBack}
              alt="icon-back"
              width={15}
              height={5}
            />{' '}
            Back
          </Link>

          {country && (
            <CountryDetails country={country} countries={countries} />
          )}
        </Container>
      </Section>
    </>
  );
};
export default CountryPage;
