import React from "react";
import Pie from 'react-native-pie';
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Button, Icon, Text, Badge } from 'react-native-elements'
import { CurrencyFormat } from "../../utils/currency-format.component"

export class DashBoardScreen extends React.Component {

    render() {
        const epHouseLoan = 7200;
        const epFood = 5200;
        const epElectricity = 1800;
        const epTransport = 1400;
        const epOthers = 2000;

        const siRetirementFund = 3000;
        const siMutualFund = 3000;
        const siRegularSaving = 5000;
        const siFixedRateSaving = 6200;
        const siNewBikeSaving = 1800;
        const siFixedAmountSaving = siNewBikeSaving + siFixedRateSaving;

        const income = 50000;
        const saving = siRetirementFund + siMutualFund + siRegularSaving + siFixedRateSaving + siNewBikeSaving;
        const expense = epHouseLoan + epFood + epElectricity + epTransport + epOthers;
        const balance = income - saving - expense;

        const epEstimate = income * 0.50;
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
                fontSize: 23,
                marginBottom: 8,
                fontWeight: '700'
            },
            row: {
                flexDirection: 'row',
                marginTop: 15,
                marginBottom: 15,
            },
            epDetailRow: {
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 2,
                marginBottom: 3,
            },
            col2: {
                width: '50%', 
                marginRight: 2
            },
            col2_40: {
                width: '40%', 
                marginRight: 2
            },
            col2_60: {
                width: '60%', 
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
            moneyValueRed: {
                color: 'red',
                fontSize: 18,
                fontWeight: '700'
            },
            moneyValueGreen: {
                color: '#009900',
                fontSize: 18,
                fontWeight: '700'
            },
            epMoneyValueRed: {
                color: 'red',
                fontSize: 16,
                fontWeight: '700'
            },
            epMoneyValueGreen: {
                color: '#009900',
                fontSize: 16,
                fontWeight: '700'
            },
            epMoneyValue: {
                fontSize: 16,
                fontWeight: '700'
            },
            labelSmall: {
                fontSize: 15,
                fontWeight: '100'
            },
            labelPercentage: {
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
                marginTop: 12
            },
            labelRemainingPercentage: {
                color: '#333333',
                fontSize: 16,
                fontWeight: '700',
                textAlign: 'center',
                marginTop: 12
            },
            monthSavingPercentage: {
                width: monthSavingPercentage.toFixed(2) + '%',
                height: 46, 
                backgroundColor: 'steelblue'
            },
            monthExpensePercentage: {
                width: monthExpensePercentage.toFixed(2) + '%',
                height: 46, 
                backgroundColor: '#b44682'
            },
            monthBalancePercentage: {
                width: monthBalancePercentage.toFixed(2) + '%',
                height: 46, 
                backgroundColor: '#82b446'
            },
            yearActualSavingPercentage: {
                width: yearActualSavingPercentage.toFixed(2) + '%',
                height: 46, 
                backgroundColor: 'steelblue'
            },
            yearRemainingSavingPercentage: {
                width: yearRemainingSavingPercentage.toFixed(2) + '%',
                height: 46, 
                backgroundColor: '#c7d9e8'
            },
            yearActualExpensePercentage: {
                width: yearActualSavingPercentage.toFixed(2) + '%',
                height: 46, 
                backgroundColor: '#b44682'
            },
            yearRemainingExpensePercentage: {
                width: yearRemainingSavingPercentage.toFixed(2) + '%',
                height: 46, 
                backgroundColor: '#dda7c4'
            },
            button: {
                borderRadius: 8, 
                marginBottom: 8
            }
        });

        // currencyFormat = (num, hide2digits) => {
        //     const numWithDigits = hide2digits ? num.toString() : num.toFixed(2);
        //     return numWithDigits.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        // }

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
                            <View style={styles.col2}>
                                <CurrencyFormat value={saving} style={styles.moneyValueGreen} />
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: 'steelblue'}}/> Saving ({Math.round(monthSavingPercentage) + '%'})</Text>
                            </View>
                            <View style={styles.col2}>
                                <CurrencyFormat value={expense} style={styles.moneyValueRed} />
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#b44682'}}/> Expense ({Math.round(monthExpensePercentage) + '%'})</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.col2}>
                                <CurrencyFormat value={balance} style={styles.moneyValue} />
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#82b446'}}/> Balance ({Math.round(monthBalancePercentage) + '%'})</Text>
                            </View>
                            <View style={styles.col2}>
                                <CurrencyFormat value={income} style={styles.moneyValue} />
                                <Text style={styles.labelSmall}>Total Income</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <Text style={styles.cardTitle}>Expense this month</Text>
                        <View style={styles.row}>
                            <View style={styles.col2_40}>
                                <Pie
                                    radius={65}
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
                            <View style={styles.col2_60}>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#dda7c4'}}/> House loan (A): </Text>
                                    <CurrencyFormat value={epHouseLoan} style={styles.epMoneyValueRed} />
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#cc7ba7'}}/> Electricity bill : </Text>
                                    <CurrencyFormat value={epElectricity} style={styles.epMoneyValueRed} />
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#a23f75'}}/> Food/drink : </Text>
                                    <CurrencyFormat value={epFood} style={styles.epMoneyValueRed} />
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#7d315a'}}/> Transport : </Text>
                                    <CurrencyFormat value={epTransport} style={styles.epMoneyValueRed} />
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#5f2545'}}/> Others : </Text>
                                    <CurrencyFormat value={epOthers} style={styles.epMoneyValueRed} />
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#82b446'}}/> Est. Remainder : </Text>
                                    <CurrencyFormat value={epEstimate - expense} style={styles.epMoneyValueGreen} />
                                </View>
                            </View>
                        </View>
                        {/* <Card.Divider style={{margin: 0, padding: 0}}/> */}
                        <View style={styles.row}>
                            <View style={styles.col3}>
                                <CurrencyFormat value={epEstimate} style={styles.moneyValue} />
                                <Text style={styles.labelSmall}>Estimation</Text>
                            </View>
                            <View style={styles.col3}>
                                <CurrencyFormat value={expense} style={styles.moneyValueRed} />
                                <Text style={styles.labelSmall}>Total spending</Text>
                            </View>
                            <View style={styles.col3}>
                                <CurrencyFormat value={epHouseLoan} style={styles.moneyValueRed} />
                                <Text style={styles.labelSmall}>Fixed expense</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <Text style={styles.cardTitle}>Saving & Investment this month</Text>
                        <View style={styles.row}>
                            <View style={styles.col2_40}>
                                <Pie
                                    radius={65}
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
                            <View style={styles.col2_60}>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#c7d9e8'}}/> Retirement : </Text>
                                    <CurrencyFormat value={siRetirementFund} style={styles.epMoneyValueGreen} />
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#a2c0d9'}}/> Mutual fund : </Text>
                                    <CurrencyFormat value={siMutualFund} style={styles.epMoneyValueGreen} />
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#7da7ca'}}/> Regular rate : </Text>
                                    <CurrencyFormat value={siRegularSaving} style={styles.epMoneyValueGreen} />
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#588ebb'}}/> Fixed rate (A) : </Text>
                                    <CurrencyFormat value={siFixedRateSaving} style={styles.epMoneyValueGreen} />
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#3f75a2'}}/> New bike (A) : </Text>
                                    <CurrencyFormat value={siNewBikeSaving} style={styles.epMoneyValueGreen} />
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#82b446'}}/> Est. Remainder : </Text>
                                    <CurrencyFormat value={siEstimate - saving} style={styles.epMoneyValueRed} />
                                </View>
                            </View>
                        </View>
                        {/* <Card.Divider style={{margin: 0, padding: 0}}/> */}
                        <View style={styles.row}>
                            <View style={styles.col3}>
                                <CurrencyFormat value={siEstimate} style={styles.moneyValue} />
                                <Text style={styles.labelSmall}>Estimation</Text>
                            </View>
                            <View style={styles.col3}>
                                <CurrencyFormat value={saving} style={styles.moneyValueGreen} />
                                <Text style={styles.labelSmall}>Total saving</Text>
                            </View>
                            <View style={styles.col3}>
                                <CurrencyFormat value={siFixedAmountSaving} style={styles.moneyValueGreen} />
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
                                <CurrencyFormat value={acctYearSaving} style={styles.moneyValueGreen} />
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: 'steelblue'}}/> Current ({Math.round(yearActualSavingPercentage) + '%'})</Text>
                            </View>
                            <View style={styles.col2}>
                                <CurrencyFormat value={siYearEstimate} style={styles.moneyValue} />
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#c7d9e8'}}/> Estimated ({Math.round(yearRemainingSavingPercentage) + '%'})</Text>
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
                                <CurrencyFormat value={acctYearExpense} style={styles.moneyValueRed} />
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#b44682'}}/> Current ({Math.round(yearActualExpensePercentage) + '%'})</Text>
                            </View>
                            <View style={styles.col2}>
                                <CurrencyFormat value={epYearEstimate} style={styles.moneyValue} />
                                <Text style={styles.labelSmall}><Badge badgeStyle={{backgroundColor: '#dda7c4'}}/> Estimated ({Math.round(yearRemainingExpensePercentage) + '%'})</Text>
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
