import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TransactionRoute } from "./transaction-routes";

import { AccountTransactionScreen } from "../scenes/transaction/account-transaction/account-transaction.component";
import { BudgetScreen } from "../scenes/transaction/budget/budget.component";
 
const Tab = createMaterialTopTabNavigator()

export class TransactionNavigator extends Component {
    render() {
        return (
            <Tab.Navigator initialRouteName={TransactionRoute.ACCOUNT_TRANSACTION}>
                <Tab.Screen name={TransactionRoute.ACCOUNT_TRANSACTION} component={AccountTransactionScreen}></Tab.Screen>
                <Tab.Screen name={TransactionRoute.BUDGET_TRANSACTION} component={BudgetScreen}></Tab.Screen>
            </Tab.Navigator>
        );
    }
}