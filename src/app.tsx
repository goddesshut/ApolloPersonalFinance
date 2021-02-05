import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRoute } from "./navations/app-routes";
import { AppNavigator } from "./navations/app.navigator";

export default class App extends React.Component {

  private isAuthorized = true;

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator initialRouteName={this.isAuthorized ? AppRoute.DASHBOARD: AppRoute.AUTH} />
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}
