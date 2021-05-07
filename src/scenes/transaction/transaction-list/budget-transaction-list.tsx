import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Card } from "react-native-elements";
import { CurrencyFormat } from "../../../utils/currency-format.component";

interface Props {
    transactionId: any;
    type: string;
}

export class BudgetTransactionListScreen extends Component<any, any> {

    private budgetId = "789546256";
    private authToken = 'eyJraWQiOiJMVHBWV29EdExjdUhyRnB1MW5VXC84QSt0QTdXWXI4QllQbFNpODJUaUZ5bz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmYTYxNDE0OC0yMjQ5LTRlMjgtOGRmYy0yNTUwYmM1OTFmMWQiLCJjb2duaXRvOmdyb3VwcyI6WyJBcG9sbG9Hcm91cCJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfWGFiRTNBeW1QIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNXU2MzhybTFycmtmaHBudDV2YTFqcDBrOGUiLCJldmVudF9pZCI6IjY5YWVlMTBmLTg4YmQtNDk1OS1hNTYzLTU4MzM3NTVjZGI0NyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gcGhvbmUgb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjIwMzU4Njk5LCJleHAiOjE2MjA0NDUwOTksImlhdCI6MTYyMDM1ODY5OSwianRpIjoiY2JjZjA3MGUtYTgyZC00YTJmLTgyMDItYmM2YjkzZjA2YjBiIiwidXNlcm5hbWUiOiJhcG9sbG8ifQ.l8vgwlo5XjMJuF0WcOPsL182iUceaLLUYxgu-amX6mJhBkWVBJs78eokjSk36q0tu7sY9Rq4b_ZGKBgEQ1mMAB6ez0qzzKQK5MF7wQWTzAwT_seS844JBzgwgkGqlvj_ehGPfgy72J4lh3s6IbfHk9rkPU3i2XbJcIbDG2VZCro1cS4Eo1tWur1PyRNx9bMyNbED8gv3JppyqLpDrzg2rcpNz2xc6VniDUHC2uMmmf3n0mCK2S8D2iRhuxhhcl9DYFAtbZWuWtQu8IUF1I-rTzMgFqY0RgRyoa4GRwIpcogN2IfeUiGT6kI3eSdIvB7ELtPHgERt_Y1R8POJcNIktA';


    constructor(props) {
        super(props);
        this.state = {
            budgetTransactionDetail: [],
        };
    }

    componentDidMount() {
        this.getฺBudgetTransaction(this.budgetId).then((res) => {
            this.setState({ budgetTransactionDetail: res.data });
         });
    }

    render() {
        return (
            this.state.budgetTransactionDetail.filter(x => x.butgetId === this.props.transactionId).map((item, index) => (
                <Card key={`tranaction-detail-${index + 1}`} containerStyle={{ borderRadius: 10 }}>
                    <View style={styles.row}>
                        <Icon reverse name='payments' size={20} color={'blue'} key={'icon' + index} />
                        <Text key={'categoryType' + index} style={styles.title}>{item.transactionType}</Text>
                    </View>

                    <View style={[styles.row, { paddingTop: 20 }]}>
                        <CurrencyFormat value={item.value} style={styles.fontRed} key={'transactionType' + index} />
                        <Text style={{ flex: 1, textAlign: "right" }} key={'updateDate' + index}>{item.date}</Text>
                    </View>
                </Card>
            ))
        ) 
    }

    private getฺBudgetTransaction(budgetId) {
        return fetch('https://1to2o3kdx7.execute-api.ap-southeast-1.amazonaws.com/dev/budget/transactions?budget_id=' + budgetId, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.authToken
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
