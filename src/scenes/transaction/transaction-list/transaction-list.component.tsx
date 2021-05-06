import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Card } from "react-native-elements";
import { CurrencyFormat } from "../../../utils/currency-format.component"
import { TransactionType } from "../../../model/transactionType";
import { TransactionDetail } from "../model/transaction-list.model";

interface Props {
    transactionId: string;
    type: string;
}

export class TransactionListScreen extends Component<Props> {

    private transactionDetail: TransactionDetail[] = [];
    private accoundId = "293-92880988";
    state = { accountTransactionDetail: [] as TransactionDetail[], transactionDetail: [] as TransactionDetail[]};

    constructor(props) {
        super(props);
        this.state = {
            accountTransactionDetail: [],
            transactionDetail:[]
        };
    }

    componentDidMount(){
        this.getAccountTransaction(this.accoundId).then((res) => {
            //this.transactionDetail = res.body;
            
            this.setState({accountTransactionDetail: res.body});
            this.getTransactioDetail();
            console.log('componentDidMount', this.state.transactionDetail);
        });
        
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

        console.log('anacondong', this.state.transactionDetail);
        return (
            this.state.transactionDetail.map((item, index) => (
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
            this.setState({transactionDetail : this.state.accountTransactionDetail.filter(x => x.accountNumber === this.props.transactionId)});
            // console.log('transaction detail',this.state.transactionDetail);
            // console.log('id', this.props.transactionId);
            // console.log('account detail', this.state.accountTransactionDetail)
        } else {
            this.setState({transactionDetail : this.state.accountTransactionDetail.filter(x => x.categoryType === this.props.transactionId)});
        }

    }
    private getAccountTransaction(accountid) {
        return fetch('https://1to2o3kdx7.execute-api.ap-southeast-1.amazonaws.com/dev/transactions?accountid='+ accountid, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
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
