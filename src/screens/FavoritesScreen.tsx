import { FlatList, StyleSheet, View } from "react-native"
import { MD3Colors, Icon } from "react-native-paper"
import { CurrencyListItem } from "../components/CurrencyListItem";
import { useExchangeRates } from "../store/exchangeRates";
import { useFavorites } from "../store/addFavorities";
import { FavoriteEmptyComponent } from "../components/MessagesComponents";
import { useEffect } from "react";


export const FavoritesScreenOption = {
  tabBarIcon: () => (
    <Icon
      source="star-box"
      color={MD3Colors.primary50}
      size={20}
    />
  ),
  tabBarLabel: 'Favorites',
  title: 'Selected courses',
  headerTintColor: MD3Colors.primary50
}


export const FavoritesScreen = () => {
  const { rates, fetchRates } = useExchangeRates();
  const { favorites, isFavorite, toggleFavorite, loadFavorites } = useFavorites();

  useEffect(() => {
    fetchRates();
    loadFavorites();
  }, []);

  const favoriteRates = rates.filter(([currency]) =>
    favorites.includes(currency)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteRates}
        keyExtractor={([code]) => code}
        renderItem={({ item: [code, value] }) => (
          <CurrencyListItem
            isFavorite={isFavorite(code)}
            code={code}
            value={value}
            onPress={() => toggleFavorite(code)} />
        )}
        ListEmptyComponent={FavoriteEmptyComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: MD3Colors.primary95
  },
})