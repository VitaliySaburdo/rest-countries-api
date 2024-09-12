import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { useTheme } from '../../context/useTheme';
import { getAllCountry } from '../../ApiService/ApiService';
import { Country } from '../../../types/Country';
import HomePage from '../../pages/HomePage';
import style from './App.module.scss';
import CountryPage from '../../pages/CountryPage';
import NotFound from '../../pages/NotFound';

function App() {
  const { theme } = useTheme();
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      if (!countries.length) {
        try {
          const data = await getAllCountry();
          setCountries(data as Country[]);
        } catch (error) {
          console.error('Country not found:', error);
          setCountries([]);
        }
      }
    };

    fetchCountries();
  }, [countries.length]);

  return (
    <>
      <Header />
      <main className={(theme === 'dark' && style.dark) || undefined}>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} />} />
          <Route
            path="/country/:name"
            element={<CountryPage countries={countries} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
