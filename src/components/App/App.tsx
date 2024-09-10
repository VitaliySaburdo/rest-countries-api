import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { useTheme } from '../../context/useTheme';
import { getAllCountry } from '../../ApiService/ApiService';
import { Country } from '../../../types/Country';
import { HomePage } from '../../pages/HomePage';
import style from './App.module.scss';

function App() {
  const { theme } = useTheme();
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountry();
        setCountries(data as Country[]);
      } catch (error) {
        console.error('Country not found:', error);
        setCountries([]);
      }
    };
    fetchCountries();
  }, []);

  return (
    <>
      <Header />
      <main className={(theme === 'dark' && style.dark) || undefined}>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
