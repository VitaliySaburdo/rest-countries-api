import { useEffect, useState, useCallback } from 'react';
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
      <Section>
        <Container>
          <div className={style.searchWrapper}>
            <InputField onSearch={handleOnSearch} />
            <FilterField onRegionFilter={handleOnRegionFilter} />
          </div>
          <CountryList countries={fragment} />
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
