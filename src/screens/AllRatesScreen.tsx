import { StyleSheet, View } from "react-native"
import { Icon, MD3Colors, Text } from 'react-native-paper';
import { fetchExchangeRates } from "../api/fixerApi";

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
  fetchExchangeRates()

  return (
    <View style={styles.container}>
      <Text>
        AllRatesScreen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: MD3Colors.primary95
  },

})
