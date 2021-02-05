import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoute } from "./app-routes";
import { DashBoardScreen } from "../scenes/dashboard/dashboard.component";

const Stack = createStackNavigator();

const AppNavigator = (props) => {
    return (
        <Stack.Navigator {...props} headerMode='none'>
            <Stack.Screen name={AppRoute.DASHBOARD} component={DashBoardScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigator;