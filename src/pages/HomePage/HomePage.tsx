import { useEffect, useState, useCallback } from 'react';
import { useTheme } from '../../context/useTheme';
import { Container } from '../../components/Container';
import { CountryList } from '../../components/CountryList';
import { FilterField } from '../../components/FilterField';
import { InputField } from '../../components/InputField';
import { Pagination } from '../../components/Pagination';
import { Section } from '../../components/Section';
import { Country } from '../../../types/Country';
import style from './HomePage.module.scss';

interface HomePageProps {
  countries: Country[];
}

const HomePage: React.FC<HomePageProps> = ({ countries }) => {
  const { theme } = useTheme();
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [fragment, setFragment] = useState<Country[]>([]);
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    let data = [...countries];
    if (search) {
      data = data.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (region) {
      data = data.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      );
    }
    setFilteredCountries(data);
  }, [region, search, countries]);

  const handleOnSearch = (searchValue: string) => {
    setSearch(searchValue);
  };
  const handleOnRegionFilter = (regionValue: string) => {
    setRegion(regionValue);
  };

  const handleFragmentChange = useCallback((paginationCountries: Country[]) => {
    setFragment(paginationCountries);
  }, []);

  return (
    <>
      <Section
        style={{
          backgroundColor:
            theme === 'dark' ? 'hsl(207, 26%, 17%)' : 'hsl(223, 64%, 98%)',
        }}
      >
        <Container>
          <div className={style.searchWrapper}>
            <InputField onSearch={handleOnSearch} />
            <FilterField onRegionFilter={handleOnRegionFilter} />
          </div>
          {fragment.length || !search ? (
            <CountryList countries={fragment} />
          ) : (
            <>
              <div className={style.searchError}>
                Countries named "{search}" not found
              </div>
            </>
          )}
          <Pagination
            countries={filteredCountries}
            setFragment={handleFragmentChange}
          />
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
