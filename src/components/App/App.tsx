import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header';
import { getAllCountry } from '../../ApiService/ApiService';
import { Country } from '../../../types/Country';
import HomePage from '../../pages/HomePage';
import CountryPage from '../../pages/CountryPage';
import NotFound from '../../pages/NotFound';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      if (!countries.length) {
        try {
          const data = await getAllCountry();
          setCountries(data as Country[]);
        } catch (error) {
          console.error('Country not found:', error);
          setCountries([]);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchCountries();
  }, [countries.length]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage countries={countries} isLoading={isLoading} />}
          />
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
