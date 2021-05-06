import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Card } from "react-native-elements";
import { CurrencyFormat } from "../../../utils/currency-format.component"
import { TransactionType } from "../../../model/transactionType";
import { TransactionDetail, TransactionDetailData } from "../model/transaction-list.model";

interface Props {
    transactionId: any;
    type: string;
}

export class TransactionListScreen extends Component<Props> {

    private transactionDetail: TransactionDetail[] = [];

    constructor(props) {
        super(props);
        // first time loading data
        this.getTransactioDetail();
    }

    // reload when properties has change
    shouldComponentUpdate(nextProps) {
        if (this.props.transactionId !== nextProps.transactionId) {
            this.getTransactioDetail();
            return true;
        }

        return false;
    }

    render() {
        return (
            this.transactionDetail.map((item, index) => (
                <Card key={`tranaction-detail-${index + 1}`} containerStyle={{ borderRadius: 10 }}>
                    <View style={styles.row}>
                        <Icon reverse name='payments' size={20} color={'blue'} key={'icon' + index} />
                        <Text key={'categoryType' + index} style={styles.title}>{item.categoryType}</Text>
                    </View>

                    <View style={[styles.row, { paddingTop: 20 }]}>
                        <CurrencyFormat value={item.price} style={item.transactionType === TransactionType.INCOME ? styles.fontGreen : styles.fontRed} key={'transactionType' + index} />
                        <Text style={{ flex: 1, textAlign: "right" }} key={'updateDate' + index}>{item.updateDate}</Text>
                    </View>
                </Card>

            ))
        )
    }

    private getTransactioDetail() {
        if (this.props.type === 'account') {
            this.transactionDetail = TransactionDetailData.filter(x => x.accountNumber === this.props.transactionId);
        } else {            
            this.transactionDetail = TransactionDetailData.filter(x => x.budgetId === this.props.transactionId);
        }

    }
}

const styles = StyleSheet.create({
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
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    fontRed: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
});
