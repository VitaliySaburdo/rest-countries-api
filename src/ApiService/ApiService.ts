import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

export const getAllCountry = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}all`);
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

export const getCountryByRegion = async (region: string) => {
  console.log(region);
  try {
    const { data } = await axios.get(`${BASE_URL}region/${region}`);
    return data;
  } catch (error) {
    console.error(`Error fetching country by region "${region}":`, error);
    throw error;
  }
};
