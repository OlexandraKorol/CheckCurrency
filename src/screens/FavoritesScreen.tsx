import { Icon, MD3Colors } from "react-native-paper";
import { FavoriteEmptyComponent } from "../components/MessagesComponents";
import { StyleSheet, View } from "react-native";


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
      <FavoriteEmptyComponent />
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