import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Button, Icon, Text, Badge } from 'react-native-elements'
import Pie from 'react-native-pie';

export class DashBoardScreen extends React.Component {

    render() {
        const epHouseLoan = 7200;
        const epFood = 3200;
        const epElectricity = 1100;
        const epTransport = 1400;
        const epOthers = 2000;

        const income = 50000;
        const saving = 10000;
        const expense = epHouseLoan + epFood + epElectricity + epTransport + epOthers;
        const balance = income - saving - expense;

        const epEstimate = income * 0.35;

        const savingPercentage = (saving * 100 / income);
        const expensePercentage = (expense * 100 / income);
        const balancePercentage = (balance * 100 / income);

        const styles = StyleSheet.create({
            cardTitle: {
                fontSize: 16,
                marginBottom: 8,
                fontWeight: '700'
            },
            row: {
                flexDirection: 'row',
                marginTop: 5,
                marginBottom: 8,
            },
            epDetailRow: {
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 1,
                marginBottom: 2,
            },
            col2: {
                width: '50%', 
                marginRight: 2
            },
            col3: {
                width: '33.3%', 
                marginRight: 2
            },
            col4: {
                width: '25%', 
                marginRight: 2
            },
            moneyValue: {
                fontSize: 18,
                fontWeight: '700'
            },
            epMoneyValue: {
                fontSize: 16,
                fontWeight: '700'
            },
            labelSmall: {
                fontSize: 14,
                fontWeight: '100'
            },
            labelPercentage: {
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: '700',
                textAlign: 'center',
                marginTop: 8
            },
            savingPercentage: {
                width: savingPercentage.toFixed(2) + '%',
                height: 35, 
                backgroundColor: 'steelblue'
            },
            expensePercentage: {
                width: expensePercentage.toFixed(2) + '%',
                height: 35, 
                backgroundColor: '#b44682'
            },
            balancePercentage: {
                width: balancePercentage.toFixed(2) + '%',
                height: 35, 
                backgroundColor: '#82b446'
            }
        });

        currencyFormat = (num, show2digits) => {
            const numWithDigits = show2digits ? num.toFixed(2) : num.toString();
            return numWithDigits.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }

        return (
            <SafeAreaView>
                <Card>
                    {/* <Card.Title style={{ margin:0, padding: 0 }}>Monthly financial health</Card.Title> */}
                    <Text style={styles.cardTitle}>February financial health</Text>
                    <View style={styles.row}>
                        <View style={styles.savingPercentage}>
                            <Text style={styles.labelPercentage}>{Math.round(savingPercentage) + '%'}</Text>
                        </View>
                        <View style={styles.expensePercentage}>
                            <Text style={styles.labelPercentage}>{Math.round(expensePercentage) + '%'}</Text>
                        </View>
                        <View style={styles.balancePercentage}>
                            <Text style={styles.labelPercentage}>{Math.round(balancePercentage) + '%'}</Text>
                        </View>
                    </View>
                    {/* <Card.Divider style={{margin: 0, padding: 0}}/> */}
                    <View style={styles.row}>
                        <View style={styles.col4}>
                            <Text style={styles.moneyValue}>{currencyFormat(income)}</Text>
                            <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#888888'}}/> Income</Text>
                        </View>
                        <View style={styles.col4}>
                            <Text style={styles.moneyValue}>{currencyFormat(saving)}</Text>
                            <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: 'steelblue'}}/> Saving</Text>
                        </View>
                        <View style={styles.col4}>
                            <Text style={styles.moneyValue}>{currencyFormat(expense)}</Text>
                            <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#b44682'}}/> Expense</Text>
                        </View>
                        <View style={styles.col4}>
                            <Text style={styles.moneyValue}>{currencyFormat(balance)}</Text>
                            <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#82b446'}}/> Balance</Text>
                        </View>
                    </View>
                    {/* <View style={styles.row}>
                        <View style={{width: '33.3%', marginRight: 2}}>
                            <Text style={styles.moneyValue}>25,000</Text>
                            <Text style={styles.labelSmall}>Balance</Text>
                        </View>
                        <View style={{width: '33.3%', marginLeft: 2}}>
                            <Text style={styles.moneyValue}>15,000</Text>
                            <Text style={styles.labelSmall}>Saving</Text>
                        </View>
                        <View style={{width: '33.3%', marginLeft: 2}}>
                            <Text style={styles.moneyValue}>10,000</Text>
                            <Text style={styles.labelSmall}>Expense</Text>
                        </View>
                    </View> */}
                    {/* <Button
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='GOAL SETTING' /> */}
                </Card>
                <Card>
                    <Text style={styles.cardTitle}>Expense summary</Text>
                    <View style={styles.row}>
                        <View style={styles.col2}>
                            <Pie
                                radius={80}
                                sections={[
                                    {
                                    percentage: (epHouseLoan * 100 / epEstimate),
                                    color: '#dda7c4',
                                    },
                                    {
                                    percentage: (epElectricity * 100 / epEstimate),
                                    color: '#cc7ba7',
                                    },
                                    {
                                    percentage: (epFood * 100 / epEstimate),
                                    color: '#a23f75',
                                    },
                                    {
                                    percentage: (epTransport * 100 / epEstimate),
                                    color: '#7d315a',
                                    },
                                    {
                                    percentage: (epOthers * 100 / epEstimate),
                                    color: '#5f2545',
                                    },
                                    {
                                    percentage: ((epEstimate - expense) * 100 / epEstimate),
                                    color: '#82b446',
                                    },
                                ]}
                                strokeCap={'butt'}
                            />
                        </View>
                        <View style={styles.col2}>
                            <View style={styles.epDetailRow}>
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#dda7c4'}}/> House loan : </Text>
                                <Text style={[styles.epMoneyValue, {textAlign: 'right'}]}>- {currencyFormat(epHouseLoan)}</Text>
                            </View>
                            <View style={styles.epDetailRow}>
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#cc7ba7'}}/> Electricity bill : </Text>
                                <Text style={styles.epMoneyValue}>- {currencyFormat(epElectricity)}</Text>
                            </View>
                            <View style={styles.epDetailRow}>
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#a23f75'}}/> Food/drink : </Text>
                                <Text style={styles.epMoneyValue}>- {currencyFormat(epFood)}</Text>
                            </View>
                            <View style={styles.epDetailRow}>
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#7d315a'}}/> Transport : </Text>
                                <Text style={styles.epMoneyValue}>- {currencyFormat(epTransport)}</Text>
                            </View>
                            <View style={styles.epDetailRow}>
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#5f2545'}}/> Others : </Text>
                                <Text style={styles.epMoneyValue}>- {currencyFormat(epOthers)}</Text>
                            </View>
                            <View style={styles.epDetailRow}>
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#82b446'}}/> Balance : </Text>
                                <Text style={styles.epMoneyValue}>+ {currencyFormat(epEstimate - expense)}</Text>
                            </View>
                        </View>
                    </View>
                    {/* <Card.Divider style={{margin: 0, padding: 0}}/> */}
                    <View style={styles.row}>
                        <View style={styles.col3}>
                            <Text style={styles.moneyValue}>{currencyFormat(epEstimate)}</Text>
                            <Text style={styles.labelSmall}>Estimation</Text>
                        </View>
                        <View style={styles.col3}>
                            <Text style={styles.moneyValue}>{currencyFormat(expense)}</Text>
                            <Text style={styles.labelSmall}>Total Spending</Text>
                        </View>
                        <View style={styles.col3}>
                            <Text style={styles.moneyValue}>{currencyFormat(epHouseLoan)}</Text>
                            <Text style={styles.labelSmall}>Fixed cost</Text>
                        </View>
                    </View>
                </Card>

            </SafeAreaView>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
});
