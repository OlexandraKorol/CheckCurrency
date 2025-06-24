import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchExchangeRates } from '../api/fixerApi';

type Rate = [string, number];

type Store = {
  rates: Rate[];
  loading: boolean;
  error: string | null;
  fetchRates: () => Promise<void>;
  baseCurency: ""
};

export const useExchangeRates = create<Store>((set) => ({
  rates: [],
  loading: true,
  error: null,
  baseCurency: "",

  fetchRates: async () => {
    set({ loading: true });
    try {
      const data = await fetchExchangeRates();
      const ratesArray: Rate[] = Object.entries(data.data.rates);
      
      set({ rates: ratesArray, loading: false, baseCurency: data.data.base });
      await AsyncStorage.setItem('@rates', JSON.stringify(ratesArray));
    } catch (err) {
      const cached = await AsyncStorage.getItem('@rates');
      if (cached) {
        set({ rates: JSON.parse(cached), loading: false });
      } else {
        set({ error: 'Failed to load rates.', loading: false });
      }
    }
  },
}));
