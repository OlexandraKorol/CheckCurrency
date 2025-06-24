import { StatusBar, StyleSheet, View } from "react-native"
import { Icon, MD3Colors } from 'react-native-paper';
import { CurrencyListItem } from "../components/CurrencyListItem";
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
  return (
    <View style={styles.container}>
      <StatusBar />

      <BaseCurrency baseCurency={"UAN"} />

      <CurrencyListItem
        isFavorite={true}
        code={"UAN"}
        value={40}
        onPress={() => console.log("press")} />
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
