import { useState } from 'react';
import { Container } from '../Container';
import { Header } from '../Header';
import { InputField } from '../InputField';
import { Section } from '../Section';
import { useTheme } from '../../context/useTheme';
import { FilterField } from '../FilterField';
import { CountryList } from '../CountryList';
import data from '../../data/data.json';
// import {Country} from '../../../types/Country';
import style from './App.module.scss';

function App() {
  const { theme } = useTheme();
  const [countries, setCountries] = useState(data);

  console.log(data);

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
