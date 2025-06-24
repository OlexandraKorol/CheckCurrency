import { StyleSheet, View } from "react-native"
import { MD3Colors, Text } from "react-native-paper"


export const BaseCurrency = ({ baseCurency }: { baseCurency: string }) => {
  return (
    <View style={styles.headerComponent}>
      {baseCurency && (<Text variant="headlineSmall">Base Currency: </Text>)}
      <Text variant="headlineSmall">{baseCurency}</Text>
    </View>
  )
}

export const FavoriteEmptyComponent = () => {
  return (
    <View style={styles.favoriteEmptyContainer}>
      <Text variant="headlineSmall" style={styles.favEmptyHeader}>Looks like there's nothing to show here...</Text>
      <Text variant="bodyLarge" style={styles.favEmptySubheader}>Go back to the previous screen and try adding a few currencies!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerComponent: {
    marginTop: 30,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row'
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: MD3Colors.primary95,
    alignItems: 'center',
    justifyContent: 'center'
  },
  favoriteEmptyContainer: {
    margin: 30
  },
  favEmptyHeader: {
    paddingBottom: 40,
    textAlign: 'center'
  },
  favEmptySubheader: {
    color: MD3Colors.neutral60,
    textAlign: 'center'
  },
})