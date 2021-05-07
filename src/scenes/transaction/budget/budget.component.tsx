import React, { Component } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { CurrencyFormat } from "../../../utils/currency-format.component"
import { CategoryType } from "../../../model/categoryType";
import { TransactionListScreen } from "../transaction-list/transaction-list.component";
import { BudgetTransactionListScreen } from "../transaction-list/budget-transaction-list";

interface IBudgetList {
    id: number,
    accountId: string,
    name: string,
    startDate: string,
    endDate: string
    balance: number,

    categoryType?: CategoryType,
    icon?: string
}

export class BudgetScreen extends Component {

    state = { activeIndex: 0, budgetList: [] as IBudgetList[] };
    private readonly accessToken = 'eyJraWQiOiJMVHBWV29EdExjdUhyRnB1MW5VXC84QSt0QTdXWXI4QllQbFNpODJUaUZ5bz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmYTYxNDE0OC0yMjQ5LTRlMjgtOGRmYy0yNTUwYmM1OTFmMWQiLCJjb2duaXRvOmdyb3VwcyI6WyJBcG9sbG9Hcm91cCJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfWGFiRTNBeW1QIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNXU2MzhybTFycmtmaHBudDV2YTFqcDBrOGUiLCJldmVudF9pZCI6IjY5YWVlMTBmLTg4YmQtNDk1OS1hNTYzLTU4MzM3NTVjZGI0NyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gcGhvbmUgb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjIwMzU4Njk5LCJleHAiOjE2MjA0NDUwOTksImlhdCI6MTYyMDM1ODY5OSwianRpIjoiY2JjZjA3MGUtYTgyZC00YTJmLTgyMDItYmM2YjkzZjA2YjBiIiwidXNlcm5hbWUiOiJhcG9sbG8ifQ.l8vgwlo5XjMJuF0WcOPsL182iUceaLLUYxgu-amX6mJhBkWVBJs78eokjSk36q0tu7sY9Rq4b_ZGKBgEQ1mMAB6ez0qzzKQK5MF7wQWTzAwT_seS844JBzgwgkGqlvj_ehGPfgy72J4lh3s6IbfHk9rkPU3i2XbJcIbDG2VZCro1cS4Eo1tWur1PyRNx9bMyNbED8gv3JppyqLpDrzg2rcpNz2xc6VniDUHC2uMmmf3n0mCK2S8D2iRhuxhhcl9DYFAtbZWuWtQu8IUF1I-rTzMgFqY0RgRyoa4GRwIpcogN2IfeUiGT6kI3eSdIvB7ELtPHgERt_Y1R8POJcNIktA'

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        fetch('https://1to2o3kdx7.execute-api.ap-southeast-1.amazonaws.com/dev/budget?accountId=12333', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.accessToken
            }
        })
        .then(res => res.json())
        .then((response: any) => {
            if(response?.body) {
                this.setState({ activeIndex: 0, budgetList: response.body})
            }
        })
        .catch((error) => console.error(error))
    }

    private renderItem({ item, index }) {
        return (
            <View style={styles.slide}>
                <View style={styles.slideInnerContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <Icon name={item.icon} style={styles.icon} size={42} color={'green'} /> */}
                        <Text style={{ fontSize: 28 }}>{item.name}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ paddingTop: 15, fontSize: 16 }}>
                            Budget balance : &nbsp;
                        </Text>
                        <CurrencyFormat style={{ paddingTop: 15, fontSize: 16 }} value={item.balance} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ paddingTop: 3, fontSize: 16 }}>
                            End Date : &nbsp;
                        </Text>
                        <Text style={{ paddingTop: 3, fontSize: 16 }}>{item.endDate}</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView>
                {
                    this.state.budgetList.length > 0 ?
                    <View style={{ paddingTop: 20 }}>
                        <Carousel
                            layout={"default"}
                            data={this.state.budgetList}
                            sliderWidth={sliderWidth}
                            itemWidth={itemWidth}
                            itemHeight={itemHeight}
                            renderItem={this.renderItem}
                            onSnapToItem={index => this.setState({ activeIndex: index })} />
                    </View>
                    : <Text>No data</Text>
                }
                

                <View style={{ paddingTop: 15, paddingLeft: 20 }}><Text style={{ fontSize: 16 }}>Tracsaction list</Text></View>
                <ScrollView style={styles.transactionContainer}>
                    {
                        this.state.budgetList.length > 0 ?
                        <BudgetTransactionListScreen key={this.state.activeIndex} transactionId={this.state.budgetList[this.state.activeIndex].id} type={'budget'} />: null
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const horizontalMargin = 20;
const slideWidth = 280;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

const styles = StyleSheet.create({
    slide: {
        width: itemWidth,
        height: itemHeight,
        padding: 40,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: 'green'
    },
    slideInnerContainer: {
        width: slideWidth,
        flex: 1
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 35
    },
    transactionContainer: {
        borderRadius: 8,
        backgroundColor: '#E6E6E6',
        padding: 10,
    }
});