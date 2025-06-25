import { FC } from "react"
import { StyleSheet, TouchableOpacity, View, } from "react-native"
import { Icon, MD3Colors, Text } from "react-native-paper"

interface ICurrencyListItem {
  isFavorite: boolean,
  code: string,
  value: number
  onPress: () => void
}

export const CurrencyListItem: FC<ICurrencyListItem> = ({ isFavorite, code, value, onPress }) => {
  const favoriteIcon =
    isFavorite ? <Icon
      source="heart"
      color={MD3Colors.primary50}
      size={20}
    /> : <Icon
      source="heart-outline"
      color={MD3Colors.primary50}
      size={20}
    />

  return (
    <TouchableOpacity onPress={onPress} testID="curency-list-item">
      <View style={styles.container}>
        <Text variant="bodyLarge">{code}: {value}</Text>
        <Text variant="titleSmall">{favoriteIcon}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16
  }
})