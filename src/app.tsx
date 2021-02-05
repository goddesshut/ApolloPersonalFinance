import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRoute } from "./navations/app-routes";
import AppNavigator from "./navations/app.navigator";

const App = () => {

  const isAuthorized = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator initialRouteName={isAuthorized ? AppRoute.DASHBOARD: AppRoute.AUTH} />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;
