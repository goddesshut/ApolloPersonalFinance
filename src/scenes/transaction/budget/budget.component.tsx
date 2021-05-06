import React, { Component } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { CurrencyFormat } from "../../../utils/currency-format.component"
import { CategoryType } from "../../../model/categoryType";
import { TransactionListScreen } from "../transaction-list/transaction-list.component";

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

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        fetch('https://1to2o3kdx7.execute-api.ap-southeast-1.amazonaws.com/dev/budget?accountId=12333', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((response: any) => {
            this.setState({ activeIndex: 0, budgetList: response.data})
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
                        <TransactionListScreen key={this.state.activeIndex} transactionId={this.state.budgetList[this.state.activeIndex].id} type={'budget'} />: null
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