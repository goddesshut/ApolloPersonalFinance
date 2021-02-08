import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRoute } from "./navations/app-routes";
import { AppNavigator } from "./navations/app.navigator";

export default class App extends React.Component {

  private isAuthorized = true;

  private appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#01B636'
    }
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer theme={this.appTheme}>
          <AppNavigator initialRouteName={this.isAuthorized ? AppRoute.DASHBOARD: AppRoute.AUTH} />
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}
