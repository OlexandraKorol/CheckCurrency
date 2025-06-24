import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllRatesScreen, AllRatesScreenOption } from "../screens/AllRatesScreen";
import { FavoritesScreen, FavoritesScreenOption } from "../screens/FavoritesScreen";
import { BottomTabNavigationRef } from "./common";
import { NavigationContainer } from '@react-navigation/native';
import { MD3Colors } from "react-native-paper";

export const MainNavigation = () => {
  const Tab = createBottomTabNavigator<BottomTabNavigationRef>();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: MD3Colors.primary40, 
          tabBarInactiveTintColor: MD3Colors.neutral70, 
        }}
      >
        <Tab.Screen name="AllRates" options={AllRatesScreenOption}  component={AllRatesScreen} />
        <Tab.Screen name="Favorites" options={FavoritesScreenOption} component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}