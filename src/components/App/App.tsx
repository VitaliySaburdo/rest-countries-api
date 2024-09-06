import { useEffect, useState } from 'react';
import { Container } from '../Container';
import { Header } from '../Header';
import { InputField } from '../InputField';
import { Section } from '../Section';
import { useTheme } from '../../context/useTheme';
import { FilterField } from '../FilterField';
import { CountryList } from '../CountryList';
import { getAllCountry, getCountryByName } from '../../ApiService/ApiService';
import { Country } from '../../../types/Country';
import style from './App.module.scss';

function App() {
  const { theme } = useTheme();
  const [countries, setCountries] = useState<Country[]>([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      console.log(name);
      if (name) {
        try {
          const data = await getCountryByName(name);
          setCountries(data as Country[]);
        } catch (error) {
          console.error('Country not found:', error);
          setCountries([]);
        }
      } else {
        const data = await getAllCountry();
        setCountries(data as Country[]);
      }
    };
    fetchCountries();
  }, [name]);

  const handleOnSearch = (searchName: string) => {
    setName(searchName);
  };

  return (
    <>
      <Header />
      <main className={(theme === 'dark' && style.dark) || undefined}>
        <Section>
          <Container>
            <InputField onSearch={handleOnSearch} />
            <FilterField />
            <CountryList countries={countries} />
          </Container>
        </Section>
      </main>
    </>
  );
}

export default App;
