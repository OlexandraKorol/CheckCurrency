import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Icon, MD3Colors } from "react-native-paper";

function AllRatesScreen() {
  return <Text>AllRates</Text>;
}

function FavoritesScreen() {
  return (
  <>
  <Icon
      source="heart-outline"
      color={MD3Colors.primary50}
      size={20}
    />
  
  <Text>Favorites</Text>
  </>
  );
}

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="AllRates" component={AllRatesScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
