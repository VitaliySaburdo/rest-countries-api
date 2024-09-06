import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/';

export const ApiService = async () => {
  try {
    const { data } = await axios.get(`${URL}all`);
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};
