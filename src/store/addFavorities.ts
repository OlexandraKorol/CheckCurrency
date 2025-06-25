import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'favorites';

type Store = {
  favorites: string[];
  isFavorite: (currency: string) => boolean;
  toggleFavorite: (currency: string) => void;
  loadFavorites: () => void;
};

export const useFavorites = create<Store>((set, get) => ({
  favorites: [],

  loadFavorites: async () => {
    const saved = await AsyncStorage.getItem(FAVORITES_KEY);
    if (saved) set({ favorites: JSON.parse(saved) });
  },

  isFavorite: (currency) => {
    return get().favorites.includes(currency);
  },

  toggleFavorite: async (currency) => {
    const { favorites } = get();
    const updated = favorites.includes(currency)
      ? favorites.filter((item) => item !== currency)
      : [...favorites, currency];

    set({ favorites: updated });
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  },
}));
