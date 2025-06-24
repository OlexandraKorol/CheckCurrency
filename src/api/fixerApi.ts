import axios from 'axios';
import { FIXER_API_KEY } from '@env';

export const fetchExchangeRates = async () => {
  console.log(FIXER_API_KEY);
  
  try {
    const response = await axios.get(`https://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`);
    console.log(response);
    
    return response

    
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
};
