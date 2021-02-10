import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
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

        const siRetirementFund = 2000;
        const siMutualFund = 2000;
        const siRegularSaving = 5000;
        const siFixedRateSaving = 5200;
        const siNewBikeSaving = 800;
        const siFixedAmountSaving = siNewBikeSaving + siFixedRateSaving;

        const income = 50000;
        const saving = siRetirementFund + siMutualFund + siRegularSaving + siFixedRateSaving + siNewBikeSaving;
        const expense = epHouseLoan + epFood + epElectricity + epTransport + epOthers;
        const balance = income - saving - expense;

        const epEstimate = income * 0.35;
        const siEstimate = income * 0.40;

        const monthSavingPercentage = (saving * 100 / income);
        const monthExpensePercentage = (expense * 100 / income);
        const monthBalancePercentage = (balance * 100 / income);

        const acctYearExpenseLastMonth = income * 0.40;
        const acctYearSavingLastMonth = income * 0.25;

        const siYearEstimate = 12*siEstimate;
        const epYearEstimate = 12*epEstimate;
        const acctYearSaving = acctYearSavingLastMonth + saving;
        const acctYearExpense = acctYearExpenseLastMonth + expense;
        const yearActualSavingPercentage = (acctYearSaving * 100 / siYearEstimate);
        const yearActualExpensePercentage = (acctYearExpense * 100 / epYearEstimate);
        const yearRemainingSavingPercentage = 100 - yearActualSavingPercentage;
        const yearRemainingExpensePercentage = 100 - yearActualExpensePercentage;

        const styles = StyleSheet.create({
            cardTitle: {
                fontSize: 18,
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
            labelRemainingPercentage: {
                color: '#333333',
                fontSize: 14,
                fontWeight: '700',
                textAlign: 'center',
                marginTop: 8
            },
            monthSavingPercentage: {
                width: monthSavingPercentage.toFixed(2) + '%',
                height: 35, 
                backgroundColor: 'steelblue'
            },
            monthExpensePercentage: {
                width: monthExpensePercentage.toFixed(2) + '%',
                height: 35, 
                backgroundColor: '#b44682'
            },
            monthBalancePercentage: {
                width: monthBalancePercentage.toFixed(2) + '%',
                height: 35, 
                backgroundColor: '#82b446'
            },
            yearActualSavingPercentage: {
                width: yearActualSavingPercentage.toFixed(2) + '%',
                height: 35, 
                backgroundColor: 'steelblue'
            },
            yearRemainingSavingPercentage: {
                width: yearRemainingSavingPercentage.toFixed(2) + '%',
                height: 35, 
                backgroundColor: '#c7d9e8'
            },
            yearActualExpensePercentage: {
                width: yearActualSavingPercentage.toFixed(2) + '%',
                height: 35, 
                backgroundColor: '#b44682'
            },
            yearRemainingExpensePercentage: {
                width: yearRemainingSavingPercentage.toFixed(2) + '%',
                height: 35, 
                backgroundColor: '#dda7c4'
            },
            button: {
                borderRadius: 8, 
                marginBottom: 8
            }
        });

        currencyFormat = (num, show2digits) => {
            const numWithDigits = show2digits ? num.toFixed(2) : num.toString();
            return numWithDigits.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }

        return (
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <Card>
                        <Text style={styles.cardTitle}>February financial health</Text>
                        <View style={styles.row}>
                            <View style={styles.monthSavingPercentage}>
                                <Text style={styles.labelPercentage}>{Math.round(monthSavingPercentage) + '%'}</Text>
                            </View>
                            <View style={styles.monthExpensePercentage}>
                                <Text style={styles.labelPercentage}>{Math.round(monthExpensePercentage) + '%'}</Text>
                            </View>
                            <View style={styles.monthBalancePercentage}>
                                <Text style={styles.labelPercentage}>{Math.round(monthBalancePercentage) + '%'}</Text>
                            </View>
                        </View>
                        {/* <Card.Divider style={{margin: 0, padding: 0}}/> */}
                        <View style={styles.row}>
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
                            <View style={styles.col4}>
                                <Text style={styles.moneyValue}>{currencyFormat(income)}</Text>
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#888888'}}/> Income</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <Text style={styles.cardTitle}>Expense this month</Text>
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
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#dda7c4'}}/> House loan (A): </Text>
                                    <Text style={styles.epMoneyValue}>- {currencyFormat(epHouseLoan)}</Text>
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
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#82b446'}}/> Est. Remainder : </Text>
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
                                <Text style={styles.labelSmall}>Total spending</Text>
                            </View>
                            <View style={styles.col3}>
                                <Text style={styles.moneyValue}>{currencyFormat(epHouseLoan)}</Text>
                                <Text style={styles.labelSmall}>Fixed expense</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <Text style={styles.cardTitle}>Saving & Investment this month</Text>
                        <View style={styles.row}>
                            <View style={styles.col2}>
                                <Pie
                                    radius={80}
                                    sections={[
                                        {
                                        percentage: (siRetirementFund * 100 / siEstimate),
                                        color: '#c7d9e8',
                                        },
                                        {
                                        percentage: (siMutualFund * 100 / siEstimate),
                                        color: '#a2c0d9',
                                        },
                                        {
                                        percentage: (siRegularSaving * 100 / siEstimate),
                                        color: '#7da7ca',
                                        },
                                        {
                                        percentage: (siFixedRateSaving * 100 / siEstimate),
                                        color: '#588ebb',
                                        },
                                        {
                                        percentage: (siNewBikeSaving * 100 / siEstimate),
                                        color: '#3f75a2',
                                        },
                                        {
                                        percentage: ((siEstimate - saving) * 100 / siEstimate),
                                        color: '#82b446',
                                        },
                                    ]}
                                    strokeCap={'butt'}
                                />
                            </View>
                            <View style={styles.col2}>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#c7d9e8'}}/> Retirement : </Text>
                                    <Text style={styles.epMoneyValue}>+ {currencyFormat(siRetirementFund)}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#a2c0d9'}}/> Mutual fund : </Text>
                                    <Text style={styles.epMoneyValue}>+ {currencyFormat(siMutualFund)}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#7da7ca'}}/> Regular rate : </Text>
                                    <Text style={styles.epMoneyValue}>+ {currencyFormat(siRegularSaving)}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#588ebb'}}/> Fixed rate (A) : </Text>
                                    <Text style={styles.epMoneyValue}>+ {currencyFormat(siFixedRateSaving)}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#3f75a2'}}/> New bike (A) : </Text>
                                    <Text style={styles.epMoneyValue}>+ {currencyFormat(siNewBikeSaving)}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#82b446'}}/> Est. Remainder : </Text>
                                    <Text style={styles.epMoneyValue}>- {currencyFormat(siEstimate - saving)}</Text>
                                </View>
                            </View>
                        </View>
                        {/* <Card.Divider style={{margin: 0, padding: 0}}/> */}
                        <View style={styles.row}>
                            <View style={styles.col3}>
                                <Text style={styles.moneyValue}>{currencyFormat(siEstimate)}</Text>
                                <Text style={styles.labelSmall}>Estimation</Text>
                            </View>
                            <View style={styles.col3}>
                                <Text style={styles.moneyValue}>{currencyFormat(saving)}</Text>
                                <Text style={styles.labelSmall}>Total saving</Text>
                            </View>
                            <View style={styles.col3}>
                                <Text style={styles.moneyValue}>{currencyFormat(siFixedAmountSaving)}</Text>
                                <Text style={styles.labelSmall}>Fixed saving</Text>
                            </View>
                        </View>
                    </Card>
                    <Card style={{ marginBottom: 8 }}>
                        <Text style={styles.cardTitle}>Accumulated amounts this year</Text>
                        <View style={styles.epDetailRow}>
                            <Text style={styles.labelSmall}>Total saving and investment is {Math.round(yearActualSavingPercentage) + '%'} of estimation</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.yearActualSavingPercentage}>
                                <Text style={styles.labelPercentage}>{Math.round(yearActualSavingPercentage) + '%'}</Text>
                            </View>
                            <View style={styles.yearRemainingSavingPercentage}>
                                <Text style={styles.labelRemainingPercentage}>{Math.round(yearRemainingSavingPercentage) + '%'}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.col2}>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: 'steelblue'}}/> Current: </Text>
                                    <Text style={styles.moneyValue}>{currencyFormat(acctYearSaving)}</Text>
                                </View>
                            </View>
                            <View style={styles.col2}>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#c7d9e8'}}/> Estimated: </Text>
                                    <Text style={styles.moneyValue}>{currencyFormat(siYearEstimate)}</Text>
                                </View>
                            </View>
                        </View>

                        <Card.Divider style={{height: 1, backgroundColor: '#e1e8ee'}}/>
                        
                        <View style={styles.epDetailRow}>
                            <Text style={styles.labelSmall}>Total expense is {Math.round(yearActualExpensePercentage) + '%'} of estimation</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.yearActualExpensePercentage}>
                                <Text style={styles.labelPercentage}>{Math.round(yearActualExpensePercentage) + '%'}</Text>
                            </View>
                            <View style={styles.yearRemainingExpensePercentage}>
                                <Text style={styles.labelRemainingPercentage}>{Math.round(yearRemainingExpensePercentage) + '%'}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.col2}>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#b44682'}}/> Current: </Text>
                                    <Text style={styles.moneyValue}>{currencyFormat(acctYearExpense)}</Text>
                                </View>
                            </View>
                            <View style={styles.col2}>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#dda7c4'}}/> Estimated: </Text>
                                    <Text style={styles.moneyValue}>{currencyFormat(epYearEstimate)}</Text>
                                </View>
                            </View>
                        </View>
                        
                        <Card.Divider style={{height: 1, backgroundColor: '#e1e8ee'}}/>
                        
                        <Button buttonStyle={styles.button} title='ADVISOR AND OFFER' />
                        <Button buttonStyle={styles.button} title='GOAL SETTING' />
                    </Card>
                </ScrollView>
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
