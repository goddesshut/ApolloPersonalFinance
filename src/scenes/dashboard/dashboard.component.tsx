import React from "react";
import Pie from 'react-native-pie';
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Button, Icon, Text, Badge } from 'react-native-elements'
import { CurrencyFormat } from "../../utils/currency-format.component"

export class DashBoardScreen extends React.Component<any, any> {

    private scrollView: any;
    private authToken = 'eyJraWQiOiJMVHBWV29EdExjdUhyRnB1MW5VXC84QSt0QTdXWXI4QllQbFNpODJUaUZ5bz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmYTYxNDE0OC0yMjQ5LTRlMjgtOGRmYy0yNTUwYmM1OTFmMWQiLCJjb2duaXRvOmdyb3VwcyI6WyJBcG9sbG9Hcm91cCJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfWGFiRTNBeW1QIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNXU2MzhybTFycmtmaHBudDV2YTFqcDBrOGUiLCJldmVudF9pZCI6IjJlZGQ3OWNlLTUzNWMtNGU4Zi05MTQwLTM3NzgyMzgyYzVlNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gcGhvbmUgb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjIwMjY2NjEwLCJleHAiOjE2MjAzNTMwMTAsImlhdCI6MTYyMDI2NjYxMSwianRpIjoiMDgwMzk2NDktOGVjMy00YjQ0LWEyNTYtZTBmMTllZDY5MDA0IiwidXNlcm5hbWUiOiJhcG9sbG8ifQ.aUUemZXTUa0uEnBXMKDHJIr4g8W63JB8ECCkezxOLsRXZnWOTUbxsWogxwDt2WzyeXwiLNc6yBa73O9G7NTKxW6L1ijdTk111q0jxxxBgsgXqF16HGU4fz2jQENuj5iDVC2vznmAo1S4W3qluP4mJdXMhjdLD0yQFyIydL8MxkTDR2J1J3GKGCOokrZ7Hdxiw_QHhUMwXpGQ961F1t0HN-HmSigHYDXzxj3QEZ1uT90DZiRZCflW5x2LI6tDBWWFThs7w1RZYidocxwo0UBcF7__CcE9RlBbeB_OgzOJMbPJti1mXxfnm9kGdG4tWCd0UDk9Wv9wCpdMUMbG63sfoQ';

    constructor(props) {
        super(props);
        this.state = {
            easterEgg2: false,
            // state for get method
            // dataJson: {
            //     statusCode: 0,
            //     body: [{}],
            //     headers: {}
            // },
            savingExpense: {
                period: "-",
                retirement: "-",
                mutualFund: "-",
                regularRate: "-",
                fixedRate: "-",
                newBike: "-",
                estRemainder: "-",
                estimation: "-",
                totalSaving: "-",
                fixedSaving: "-"
            },
            expense: {
                transport: "-",
                foodDrink: "-",
                fixedSaving: "-",
                estRemainder: "-",
                period: "-",
                electricityBill: "-",
                estimation: "-",
                Others: "-",
                totalSaving: "-",
                houseLoan: "-",
                expenseId: "-"
            }
        }
    }

    componentDidMount() {
        console.log("componentDidMount");

        // get method
        // this.getDataJson().then((r) => {
        //     console.debug("set state", r);
        //     this.setState({ dataJson: r });
        // });

        this.getExpense().then((res) => {
            this.setState({ expense: res.data[0] });
        })

        this.getSavingExpense().then((res) => {
            this.setState({ savingExpense: res.data[0] });
        })

    }


    private getExpense() {
        return fetch('https://1to2o3kdx7.execute-api.ap-southeast-1.amazonaws.com/dev/expense', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            },
            body: JSON.stringify({
                period: 'monthly',
                accountId: '123456'
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    private getSavingExpense() {
        return fetch('https://1to2o3kdx7.execute-api.ap-southeast-1.amazonaws.com/dev/saving/expense', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            },
            body: JSON.stringify({
                period: 'monthly',
                accountId: '123456'
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // get method
    // private getDataJson() {
    //     return fetch('https://1to2o3kdx7.execute-api.ap-southeast-1.amazonaws.com/dev/test/testlambdatodynamodb', {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             console.debug("responseJson >>>", responseJson);
    //             return responseJson;
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    private showEasterEgg() {
        this.setState({ easterEgg2: true });

        setTimeout(() => {
            this.scrollView.scrollToEnd({ animated: true });
        }, 50)

        setTimeout(() => {
            this.setState({ easterEgg2: false })
        }, 8000)
    }


    render() {
        return (
            <SafeAreaView>
                <ScrollView ref={ref => { this.scrollView = ref }}>
                    <Card>
                        <Text style={styles.cardTitle}>February financial health</Text>
                        {/* <Text style={styles.cardTitle}>1 {this.state.dataJson.body[0].message}</Text> */}
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
                                <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: 'steelblue' }} /> Saving ({Math.round(monthSavingPercentage) + '%'})</Text>
                            </View>
                            <View style={styles.col2}>
                                <CurrencyFormat value={expense} style={styles.moneyValueRed} />
                                <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#b44682' }} /> Expense ({Math.round(monthExpensePercentage) + '%'})</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.col2}>
                                <CurrencyFormat value={balance} style={styles.moneyValue} />
                                <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#82b446' }} /> Balance ({Math.round(monthBalancePercentage) + '%'})</Text>
                            </View>
                            <View style={styles.col2}>
                                <CurrencyFormat value={income} style={styles.moneyValue} />
                                <Text style={styles.labelSmall}>Total Income</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <Text style={styles.cardTitle}>Expense this {this.state.expense.period}</Text>
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
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#dda7c4' }} /> House loan (A): </Text>
                                    <Text style={styles.epMoneyValueRed}>{this.state.expense.houseLoan}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#cc7ba7' }} /> Electricity bill : </Text>
                                    <Text style={styles.epMoneyValueRed}>{this.state.expense.electricityBill}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#a23f75' }} /> Food/drink : </Text>
                                    <Text style={styles.epMoneyValueRed}>{this.state.expense.foodDrink}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#7d315a' }} /> Transport : </Text>
                                    <Text style={styles.epMoneyValueRed}>{this.state.expense.epTransport}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#5f2545' }} /> Others : </Text>
                                    <Text style={styles.epMoneyValueRed}>{this.state.expense.Others}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#82b446' }} /> Est. Remainder : </Text>
                                    <Text style={styles.epMoneyValueGreen}>{this.state.expense.Remainder}</Text>
                                </View>
                            </View>
                        </View>
                        {/* <Card.Divider style={{margin: 0, padding: 0}}/> */}
                        <View style={styles.row}>
                            <View style={styles.col3}>
                                <CurrencyFormat value={epEstimate} style={styles.moneyValue} />
                                <Text style={styles.labelSmall}>{this.state.expense.estimation}</Text>
                            </View>
                            <View style={styles.col3}>
                                <Text style={styles.moneyValueRed}>{this.state.expense.totalSaving}</Text>
                                <Text style={styles.labelSmall}>Total spending</Text>
                            </View>
                            <View style={styles.col3}>
                                <Text style={styles.moneyValueRed}>{this.state.expense.fixedSaving}</Text>
                                <Text style={styles.labelSmall}>Fixed expense</Text>
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <Text style={styles.cardTitle}>Saving & Investment this {this.state.savingExpense.period}</Text>
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
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#c7d9e8' }} /> Retirement : </Text>
                                    <Text style={styles.epMoneyValueGreen}>{this.state.savingExpense.retirement}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#a2c0d9' }} /> Mutual fund : </Text>
                                    <Text style={styles.epMoneyValueGreen}>{this.state.savingExpense.mutualFund}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#7da7ca' }} /> Regular rate : </Text>
                                    <Text style={styles.epMoneyValueGreen}>{this.state.savingExpense.regularRate}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#588ebb' }} /> Fixed rate (A) : </Text>
                                    <Text style={styles.epMoneyValueGreen}>{this.state.savingExpense.fixedRate}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#3f75a2' }} /> New bike (A) : </Text>
                                    <Text style={styles.epMoneyValueGreen}>{this.state.savingExpense.newBike}</Text>
                                </View>
                                <View style={styles.epDetailRow}>
                                    <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#82b446' }} /> Est. Remainder : </Text>
                                    <Text style={styles.epMoneyValueRed}>{this.state.savingExpense.estRemainder}</Text>
                                </View>
                            </View>
                        </View>
                        {/* <Card.Divider style={{margin: 0, padding: 0}}/> */}
                        <View style={styles.row}>
                            <View style={styles.col3}>
                                <Text style={styles.moneyValue}>{this.state.savingExpense.estimation}</Text>
                                <Text style={styles.labelSmall}>Estimation</Text>
                            </View>
                            <View style={styles.col3}>
                                <Text style={styles.moneyValueGreen}>{this.state.savingExpense.totalSaving}</Text>
                                <Text style={styles.labelSmall}>Total saving</Text>
                            </View>
                            <View style={styles.col3}>
                                <Text style={styles.moneyValueGreen}>{this.state.savingExpense.fixedSaving}</Text>
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
                                <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: 'steelblue' }} /> Current ({Math.round(yearActualSavingPercentage) + '%'})</Text>
                            </View>
                            <View style={styles.col2}>
                                <CurrencyFormat value={siYearEstimate} style={styles.moneyValue} />
                                <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#c7d9e8' }} /> Estimated ({Math.round(yearRemainingSavingPercentage) + '%'})</Text>
                            </View>
                        </View>

                        <Card.Divider style={{ height: 1, backgroundColor: '#e1e8ee' }} />

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
                                <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#b44682' }} /> Current ({Math.round(yearActualExpensePercentage) + '%'})</Text>
                            </View>
                            <View style={styles.col2}>
                                <CurrencyFormat value={epYearEstimate} style={styles.moneyValue} />
                                <Text style={styles.labelSmall}><Badge badgeStyle={{ backgroundColor: '#dda7c4' }} /> Estimated ({Math.round(yearRemainingExpensePercentage) + '%'})</Text>
                            </View>
                        </View>

                        <Card.Divider style={{ height: 1, backgroundColor: '#e1e8ee' }} />

                        {
                            this.state.easterEgg2 ?
                                (
                                    <View style={styles.easterEggContainer}>

                                    </View>
                                )
                                : null
                        }

                        <Button buttonStyle={styles.button} title='ADVISOR AND OFFER' onPress={() => this.showEasterEgg()} />
                        <Button buttonStyle={styles.button} title='GOAL SETTING' />
                    </Card>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

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

const acctYearExpenseLastMonth = income * 0.50;
const acctYearSavingLastMonth = income * 0.30;

const siYearEstimate = 12 * siEstimate;
const epYearEstimate = 12 * epEstimate;
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
    },
    easterEggContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    }
});
