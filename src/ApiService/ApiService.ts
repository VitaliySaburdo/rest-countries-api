import axios from 'axios';

const BASE_URL = 'https://api.restcountries.com/countries/v5';

const API_KEY = `rc_live_bf29b39cd2004d209268b5c3cf4af067`;


export const getAllCountry = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}`, {
 headers: { 'Authorization': API_KEY } 
    });
    console.log(data);
    return data.data.objects;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

export const getCountryByName = async (name: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}name/${name}?fullText=true`);
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
