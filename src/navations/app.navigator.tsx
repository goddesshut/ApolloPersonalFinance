import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoute } from "./app-routes";
import { DashBoardScreen } from "../scenes/dashboard/dashboard.component";

const Stack = createStackNavigator();

interface Props {
    initialRouteName: string;
}

export class AppNavigator extends React.Component<Props> {

    render() {
        return (
            <Stack.Navigator {...this.props} headerMode='none'>
                <Stack.Screen name={AppRoute.DASHBOARD} component={DashBoardScreen} />
            </Stack.Navigator>
        )
    }

}