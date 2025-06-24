import { StyleSheet, View } from "react-native"
import { MD3Colors, Icon, Text } from "react-native-paper"


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


  return (
    <View style={styles.container}>

      <Text>FavoritesScreen</Text>
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