import axios from 'axios';
import { FIXER_API_KEY } from '@env';

export const fetchExchangeRates = async () => {
  try {
    const response = await axios.get(`https://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`);
    return response

  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
};
