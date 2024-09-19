import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Container } from '../../components/Container';
import { FilterField } from '../../components/FilterField';
import { InputField } from '../../components/InputField';
import { Pagination } from '../../components/Pagination';
import { Section } from '../../components/Section';
import { Country } from '../../../types/Country';
import style from './HomePage.module.scss';

interface HomePageProps {
  countries: Country[];
  isLoading: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ countries, isLoading }) => {
  const { theme } = useTheme();
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

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
  return (
    <>
      <Section variant={theme}>
        <Container>
          <div className={style.searchWrapper}>
            <InputField onSearch={handleOnSearch} />
            <FilterField onRegionFilter={handleOnRegionFilter} />
          </div>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : !filteredCountries ? (
            <Pagination countries={filteredCountries} />
          ) : (
            <h2 className={style.message}>
              No countries were found matching your request
            </h2>
          )}
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
