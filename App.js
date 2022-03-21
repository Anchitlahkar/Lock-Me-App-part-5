import * as React from "react"
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import MainScreen from "./Screens/MainScreen";


const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME" screenOptions={{ headerShown: false }} >

        <Stack.Screen
          name="HOME"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Main"
          component={MainScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

