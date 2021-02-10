import React, { Component } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { CurrencyFormat } from "../../../utils/currency-format.component"
import { TransactionListScreen } from "../transaction-list/transaction-list.component";

interface IAccountList {
    accountType: string,
    accountName: string,
    accountNumber: string,
    balance: number,
    img?: string
}

export class AccountTransactionScreen extends Component {

    state = { activeIndex: 0, accountList: [] as IAccountList[] };

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            accountList: [
                {
                    accountType: "",
                    accountName: "Apollo",
                    accountNumber: "123-221-5486-223",
                    balance: 20000.00,
                    img: 'https://www.gamblerspick.com/uploads/monthly_2017_09/bangkokbank.png.42add7fd82ca6c9969d985a5b913ecf0.png'
                },
                {
                    accountType: "",
                    accountName: "I'm King",
                    accountNumber: "238-453-8486-638",
                    balance: 2900000.00,
                    img: 'https://102169-290234-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2015/11/icon-bank-scb.png'
                },
                {
                    accountType: "",
                    accountName: "Prayut Ja",
                    accountNumber: "564-864-4233-487",
                    balance: 1500000.00,
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiB2OFs5GTr5_zwPVXj-A6z2tpD2IuwKSe8w&usqp=CAU'
                },
                {
                    accountType: "",
                    accountName: "Poor guy",
                    accountNumber: "124-894-0000-456",
                    balance: 200.00
                }
            ]
        }
    }

    private renderItem({ item, index }) {
        return (
            <View style={styles.slide}>
                <View style={styles.slideInnerContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        {item.img ? 
                        <Image style={styles.img} resizeMode="center" source={{ uri: item.img }} /> :
                        <Icon name='account-balance-wallet' style={styles.icon} size={42} color={'green'} />
                        } 
                        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>{item.accountName}</Text>
                    </View>
                    <Text style={{ paddingTop: 25, fontSize: 16 }}>
                        Saving Account: {item.accountNumber}
                    </Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ paddingTop: 15, fontSize: 16 }}>
                            Account balance : &nbsp;
                        </Text>
                        <CurrencyFormat style={{ paddingTop: 15, fontSize: 16 }} value={item.balance} />
                    </View>
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
                        data={this.state.accountList}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        itemHeight={itemHeight}
                        renderItem={this.renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>

                <View style={{ paddingTop: 15, paddingLeft: 20 }}><Text style={{ fontSize: 16 }}>Tracsaction list</Text></View>
                <ScrollView style={styles.transactionContainer}>
                    <TransactionListScreen key={`account-transaction-${this.state.activeIndex}`} transactionId={this.state.accountList[this.state.activeIndex].accountNumber} type={'account'} />
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
    img: {
        width: 40, 
        height: 40,
        marginRight: 35
    },
    transactionContainer: {
        borderRadius: 8,
        backgroundColor: '#E6E6E6',
        padding: 10,
    }
});