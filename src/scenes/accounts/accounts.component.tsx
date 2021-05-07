import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Header, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

export interface Accounts {
    accountId: string,
    accountNumber: string,
    accountName: string,
    accountAvailableBalance: string
}

export class Accounts extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            accounts: [] as Accounts[]
        }
    }

    componentDidMount() {
        this.getAccounts().then((res) => {
            if (res?.data) {
                this.setState({ accounts: res.data });
            }
        })
    }

    private getAccounts() {
        return fetch('https://1to2o3kdx7.execute-api.ap-southeast-1.amazonaws.com/dev/accounts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'eyJraWQiOiJMVHBWV29EdExjdUhyRnB1MW5VXC84QSt0QTdXWXI4QllQbFNpODJUaUZ5bz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmYTYxNDE0OC0yMjQ5LTRlMjgtOGRmYy0yNTUwYmM1OTFmMWQiLCJjb2duaXRvOmdyb3VwcyI6WyJBcG9sbG9Hcm91cCJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfWGFiRTNBeW1QIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNXU2MzhybTFycmtmaHBudDV2YTFqcDBrOGUiLCJldmVudF9pZCI6IjI4Y2Q2ZjA1LTA3MzgtNDRkYS05NzE2LTkzY2ZiOTlhMGFlYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gcGhvbmUgb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjIwMzU2MDY3LCJleHAiOjE2MjA0NDI0NjcsImlhdCI6MTYyMDM1NjA2NywianRpIjoiNzM3NDA1MWUtNGU4MS00ZWUzLThlZjktMTMyZjg5YjFlYWI5IiwidXNlcm5hbWUiOiJhcG9sbG8ifQ.Dop5Eyn6oukUhvtuqoXd5Pw2tmM6q0TkFc4yCGIFpCejJdccRivys43W_DxqOHFKE30ri-cGa-DuWE4yr3xXP6ZQmGIdPU5GXhTLaDe33Eij9DjKgeBktATSpQdtxjaf_cJf5n76VzLwEwdPJbfHy6d5w-38Ppml5i-_LxkVcUh0StAvjGILj-Oa7r6ITjeR3dtUXi9ziFFK3jD9z90nYpGr8PD5GDfK-67OMrEFlDFlBodq96JsmjQAoc9PKDz2xRgh428LRCT-zFzujbOnH8vVbyswlYh9S-Nb8I5OtPGqT674w4UElZRZQUSeo8q9Z1Qop5iDGOyiD9JjFLvi4g'
            },
            body: JSON.stringify({
                period: 'monthly',
                accountId: '123456'
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <SafeAreaView>
                <Header
                    centerComponent={{ text: 'Accounts', style: { color: '#4caf50', fontSize: 20 } }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        borderBottomColor: '#4caf50'
                    }}
                />
                {
                    this.state.accounts.map((item, index) => {
                        return (
                            <Card key={'card' + index} containerStyle={{ height: 200, borderRadius: 20 }} >
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    {/* <View style={{ height: 50, width: '20%', marginTop: 10}}>
                                        <Image
                                            style={{ width: 50, height: 50 }}
                                            resizeMode="center"
                                            source={{ uri: item.avatar }}
                                        />
                                    </View> */}
                                    <View style={{ height: 50, width: '60%' }}>
                                        <Text style={styles.boldTextCenter}>{item.accountName}</Text>
                                    </View>
                                </View>
                                <Card.Divider style={{ marginTop: 70 }} />
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={[styles.boldText, { textAlign: 'left' }]}>{item.accountId}</Text>
                                    <Text style={[styles.boldText, { textAlign: 'right' }]}>{item.accountNumber}</Text>
                                </View>
                                <View style={{ marginTop: 40, flex: 1, flexDirection: 'row' }}>
                                    <Text style={[styles.boldText, { textAlign: 'left' }]}>Avalible Balance</Text>
                                    <Text style={[styles.boldText, { textAlign: 'right' }]}>{item.accountAvailableBalance}</Text>
                                </View>
                            </Card>
                        );
                    })
                }

                <View style={{
                    marginLeft: 10,
                    marginTop: 15,
                    height: 70,
                    width: '100%',
                    alignItems: 'center'
                }}>

                    <Button
                        icon={{
                            name: "add",
                            size: 15,
                            color: "#fff"
                        }}
                        title="Add Account"
                        buttonStyle={{
                            backgroundColor: '#4caf50',
                            width: 150,
                            height: 50
                        }}
                    />
                </View>
            </SafeAreaView>

        )
    }
}
const card = [
    {
        accountId: 'APOLLO',
        accountNumber: '12-8909-3829',
        accountName: 'SAVING ACCOUNT',
        accountAvailableBalance: '290,382.00',
        avatar: 'https://www.gamblerspick.com/uploads/monthly_2017_09/bangkokbank.png.42add7fd82ca6c9969d985a5b913ecf0.png'
    },
    {
        accountId: "I'M KING",
        accountNumber: '12-80908-2929',
        accountName: 'SAVING ACCOUNT',
        accountAvailableBalance: '10,382.00',
        avatar: 'https://102169-290234-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2015/11/icon-bank-scb.png'
    },
];
const styles = StyleSheet.create({
    boldText: {
        height: 50,
        width: '50%',
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    boldTextCenter: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
    }
});
