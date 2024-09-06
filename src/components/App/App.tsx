import { useEffect, useState } from 'react';
import { Container } from '../Container';
import { Header } from '../Header';
import { InputField } from '../InputField';
import { Section } from '../Section';
import { useTheme } from '../../context/useTheme';
import { FilterField } from '../FilterField';
import { CountryList } from '../CountryList';
import { ApiService } from '../../ApiService/ApiService';
import { Country } from '../../../types/Country';
import style from './App.module.scss';
// import data from '../../data/data.json';

function App() {
  const { theme } = useTheme();
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await ApiService();
      console.log(data);
      setCountries(data as Country[]);
    };
    fetchCountries();
  }, []);

  return (
    <>
      <Header />
      <main className={(theme === 'dark' && style.dark) || undefined}>
        <Section>
          <Container>
            <InputField />
            <FilterField />
            <CountryList countries={countries} />
          </Container>
        </Section>
      </main>
    </>
  );
}

export default App;
