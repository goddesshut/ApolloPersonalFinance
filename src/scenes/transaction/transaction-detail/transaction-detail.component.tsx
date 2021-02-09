import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Card } from "react-native-elements";
import { TransactionType } from "../../../model/transactionType";
import { AccountTransactionDetail, AccountTransactionDetailData } from "./transaction-detail.model";

interface Props {
    accountName: string;
}

export class TransactionDetailScreen extends Component<Props> {

    private accountTransaction: AccountTransactionDetail[] = [];

    constructor(props) {
        super(props);
        this.accountTransaction = AccountTransactionDetailData.filter(x => x.accountNumber === this.props.accountName);
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.accountName !== nextProps.accountName) {
            this.accountTransaction = AccountTransactionDetailData.filter(x => x.accountNumber === nextProps.accountName);
            return true;
        }

        return false;
    }

    render() {
        return (
            this.accountTransaction.map((item, index) => (
                <View key={`tranaction-detail-${index+1}`} style={styles.box}>
                    <View style={styles.row}>
                        <Icon reverse name='payments' size={20} color={'blue'} key={'icon' + index} />
                        <Text key={'categoryType' + index} style={styles.title}>{item.categoryType}</Text>
                    </View>

                    <View style={[styles.row, {paddingTop: 20}]}>
                        <Text style={item.transactionType === TransactionType.INCOME ? styles.fontGreen : styles.fontRed} key={'transactionType' + index}>
                            {item.price}
                        </Text>
                        <Text style={{ flex: 1, textAlign: "right" }} key={'updateDate' + index}>{item.updateDate}</Text>
                    </View>
                </View>
            ))
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        padding: 20,
        borderRadius: 15,        
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        paddingLeft: 10
    },
    fontGreen: {
        color: '#009900',
        fontWeight: "800",
        fontSize: 16
    },
    fontRed: {
        color: 'red',
        fontWeight: "500",
        fontSize: 16
    }
});
