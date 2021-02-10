import React, { Component } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { CategoryType } from "../../../model/categoryType";
import { TransactionListScreen } from "../transaction-list/transaction-list.component";

interface IBudgetList {
    categoryType: CategoryType,
    balance: number,
    icon: string
}

export class BudgetScreen extends Component {

    state = { activeIndex: 0, budgetList: [] as IBudgetList[] };

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            budgetList: [
                {
                    categoryType: CategoryType.SHOPING,
                    balance: 50000.00,
                    icon: 'shopping-bag'
                },
                {
                    categoryType: CategoryType.Utility,
                    balance: 24000.00,
                    icon: 'library-books'
                }
            ]
        }
    }

    private renderItem({ item, index }) {
        return (
            <View style={styles.slide}>
                <View style={styles.slideInnerContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name={item.icon} style={styles.icon} size={42} color={'green'} />
                        <Text style={{ fontSize: 28 }}>{item.categoryType}</Text>
                    </View>
                    <Text style={{ paddingTop: 25, fontSize: 18, fontWeight: '600' }}>
                        Budget balance: {item.balance}
                    </Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView>
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

                <View style={{ paddingTop: 15, paddingLeft: 20 }}><Text style={{ fontSize: 16 }}>Tracsaction list</Text></View>
                <ScrollView style={styles.transactionContainer}>
                    <TransactionListScreen key={this.state.activeIndex} transactionId={this.state.budgetList[this.state.activeIndex].categoryType} type={'budget'} />
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