import { useEffect, useState } from 'react';
import { Container } from '../Container';
import { Header } from '../Header';
import { InputField } from '../InputField';
import { Section } from '../Section';
import { useTheme } from '../../context/useTheme';
import { FilterField } from '../FilterField';
import { CountryList } from '../CountryList';
import {
  getAllCountry,
  getCountryByName,
  getCountryByRegion,
} from '../../ApiService/ApiService';
import { Country } from '../../../types/Country';
import style from './App.module.scss';

function App() {
  const { theme } = useTheme();
  const [countries, setCountries] = useState<Country[]>([]);
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        if (name && region) {
          const regionData = await getCountryByRegion(region);
          const filteredByName = regionData.filter((country: Country) =>
            country.name.common.toLowerCase().includes(name.toLowerCase())
          );
          setCountries(filteredByName);
        } else if (name) {
          const data = await getCountryByName(name);
          setCountries(data as Country[]);
        } else if (region) {
          const data = await getCountryByRegion(region);
          setCountries(data as Country[]);
        } else {
          const data = await getAllCountry();
          setCountries(data as Country[]);
        }
      } catch (error) {
        console.error('Country not found:', error);
        setCountries([]);
      }
    };
    fetchCountries();
  }, [name, region]);

  const handleOnSearch = (searchName: string) => {
    setName(searchName);
  };

  const handleOnRegionFilter = (searchRegion: string) => {
    setRegion(searchRegion);
  };

  return (
    <>
      <Header />
      <main className={(theme === 'dark' && style.dark) || undefined}>
        <Section>
          <Container>
            <InputField onSearch={handleOnSearch} />
            <FilterField onRegionFilter={handleOnRegionFilter} />
            <CountryList countries={countries} />
          </Container>
        </Section>
      </main>
    </>
  );
}

export default App;
