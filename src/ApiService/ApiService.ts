import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

export const getAllCountry = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}all?fields=name,capital,flags,population,region,cca3`
    );
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

export const getCountryByName = async (name: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}name/${name}`);
    return data;
  } catch (error) {
    console.error(`Error fetching country by name "${name}":`, error);
    throw error;
  }
};

export const getCountryByCode = async (code: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}alpha/${code}`);
    return data;
  } catch (error) {
    console.error(`Error fetching country by name "${code}":`, error);
    throw error;
  }
};
