import { useEffect, useState } from "react";
import { FlatList, StatusBar, StyleSheet, View } from "react-native"
import { Icon, MD3Colors, Text } from 'react-native-paper';
import { CurrencyListItem } from "../components/CurrencyListItem";

import { useExchangeRates } from "../store/exchangeRates";
import { useFavorites } from "../store/addFavorities";
import { BaseCurrency, LoadingComponent, NoInternetMessage, NothingFoundComponent } from "../components/MessagesComponents";
import { CustomInput } from "../components/CustomInput";
import { useNetwork } from "../hook/useNetwork";


export const AllRatesScreenOption = {
  tabBarIcon: () => (
    <Icon
      source="cash"
      color={MD3Colors.primary50}
      size={20}
    />
  ),
  tabBarLabel: 'All currencies',
  title: 'Exchange rates',
  headerTintColor: MD3Colors.primary50
}

export const AllRatesScreen = () => {
  const { rates, loading, fetchRates, baseCurency } = useExchangeRates();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { isConnected } = useNetwork();

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRates();
  }, []);

  const filteredRates = rates.filter(([code]) =>
    code.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <LoadingComponent />;
  //TODO: NOTHING FOUND COMPONENT
  return (
    <View style={styles.container}>
      <StatusBar />
      {isConnected ? (
        <>
          <CustomInput
            value={search}
            onChangeText={setSearch} />
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<BaseCurrency baseCurency={baseCurency} />}
            data={filteredRates}
            keyExtractor={([code]) => code}
            renderItem={({ item: [code, value] }) => (
              <CurrencyListItem
                isFavorite={isFavorite(code)}
                code={code}
                value={value}
                onPress={() => toggleFavorite(code)} />
            )}
            ListEmptyComponent={<NothingFoundComponent />} />
        </>
      )
        : (<NoInternetMessage />)}

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
