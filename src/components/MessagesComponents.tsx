import { useNavigation } from "@react-navigation/native"
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from "react-native"
import { Icon, MD3Colors, Text } from "react-native-paper"
import { BottomTabNavigationRef } from "../navigation/common"
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


export const BaseCurrency = ({ baseCurency }: { baseCurency: string }) => {
  return (
    <View style={styles.headerComponent} testID="base-currency">
      {baseCurency && (<Text variant="headlineSmall">Base Currency: </Text>)}
      <Text variant="headlineSmall">{baseCurency}</Text>
    </View>
  )
}

export const LoadingComponent = () => {
  return (
    <View style={styles.fullScreenContainer}>
      <Text variant="headlineSmall" style={{ paddingBottom: 40 }}>Sorry, data is loading...</Text>
      <ActivityIndicator animating={true} />
    </View>
  )
}

export const NothingFoundComponent = () => {
  return (
    <View style={styles.containersForFlatList}>
      <Text variant="bodyLarge" style={{padding: 15}}>Nothing found, try again!</Text>
      <Icon
        source="border-color"
        color={MD3Colors.primary50}
        size={20}
      />
    </View>
  )
}

export const FavoriteEmptyComponent = () => {
  return (
    <View style={styles.containersForFlatList}>
      <Text variant="headlineSmall" style={styles.favEmptyHeader}>Looks like there's nothing to show here...</Text>
      <Text variant="bodyLarge" style={styles.favEmptySubheader}>Go back to the previous screen and try adding a few currencies!</Text>
    </View>
  )
}


export const NoInternetMessage = () => {
  const navigation = useNavigation<BottomTabNavigationProp<BottomTabNavigationRef>>();
  return (
    <View style={styles.fullScreenContainer}>
      <Text variant="headlineMedium" style={styles.noInternetMessage}>It looks like there are Internet connection issues</Text>
      <Icon
        source="emoticon-confused-outline"
        color={MD3Colors.primary50}
        size={30}
      />

      <Text style={styles.noInternetMessage} variant="bodyLarge">
        But you can still view your saved currencies in the next tab!
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <Text style={styles.noInternetNavButton} variant="bodyLarge" >
          Check saved items
        </Text>
      </TouchableOpacity>
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
  containersForFlatList: {
    margin: 30,
    alignItems: 'center'
  },
  favEmptyHeader: {
    paddingBottom: 40,
    textAlign: 'center'
  },
  favEmptySubheader: {
    color: MD3Colors.neutral60,
    textAlign: 'center'
  },
  noInternetMessage: {
    paddingVertical: 30,
    color: MD3Colors.primary50,
    textAlign: 'center'
  },
  noInternetNavButton: {
    color: MD3Colors.neutral50,
  }
})