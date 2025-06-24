import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, View } from "react-native"
import { Icon, MD3Colors, Text, TextInput } from 'react-native-paper';
import { CurrencyListItem } from "../components/CurrencyListItem";

import { useExchangeRates } from "../store/exchangeRates";
import { useFavorites } from "../store/addFavorities";
import { BaseCurrency } from "../components/MessagesComponents";

export const AllRatesScreenOption = {
  tabBarIcon: () => (
    <Icon
      source="cash"
      color={MD3Colors.primary50}
      size={20}
    />
  ),
  tabBarLabel: 'All curency',
  title: 'Exchange rates',
  headerTintColor: MD3Colors.primary50
}

export const AllRatesScreen = () => {
  const { rates, fetchRates, baseCurency } = useExchangeRates();
  const { toggleFavorite, isFavorite } = useFavorites();


  useEffect(() => {
    fetchRates();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<BaseCurrency baseCurency={baseCurency} />}
        data={rates}
        keyExtractor={([code]) => code}
        renderItem={({ item: [code, value] }) => (
          <CurrencyListItem
            isFavorite={isFavorite(code)}
            code={code}
            value={value}
            onPress={() => toggleFavorite(code)} />
        )}
        ListEmptyComponent={<Text style={{ padding: 20, textAlign: 'center' }}>nothing found</Text>} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: MD3Colors.primary95
  },
  headerComponent: {
    marginTop: 30,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row'
  }
})
