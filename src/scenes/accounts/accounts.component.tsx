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

    private readonly accessToken = 'eyJraWQiOiJMVHBWV29EdExjdUhyRnB1MW5VXC84QSt0QTdXWXI4QllQbFNpODJUaUZ5bz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmYTYxNDE0OC0yMjQ5LTRlMjgtOGRmYy0yNTUwYmM1OTFmMWQiLCJjb2duaXRvOmdyb3VwcyI6WyJBcG9sbG9Hcm91cCJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfWGFiRTNBeW1QIiwidmVyc2lvbiI6MiwiY2xpZW50X2lkIjoiNXU2MzhybTFycmtmaHBudDV2YTFqcDBrOGUiLCJldmVudF9pZCI6IjY5YWVlMTBmLTg4YmQtNDk1OS1hNTYzLTU4MzM3NTVjZGI0NyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gcGhvbmUgb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjIwMzU4Njk5LCJleHAiOjE2MjA0NDUwOTksImlhdCI6MTYyMDM1ODY5OSwianRpIjoiY2JjZjA3MGUtYTgyZC00YTJmLTgyMDItYmM2YjkzZjA2YjBiIiwidXNlcm5hbWUiOiJhcG9sbG8ifQ.l8vgwlo5XjMJuF0WcOPsL182iUceaLLUYxgu-amX6mJhBkWVBJs78eokjSk36q0tu7sY9Rq4b_ZGKBgEQ1mMAB6ez0qzzKQK5MF7wQWTzAwT_seS844JBzgwgkGqlvj_ehGPfgy72J4lh3s6IbfHk9rkPU3i2XbJcIbDG2VZCro1cS4Eo1tWur1PyRNx9bMyNbED8gv3JppyqLpDrzg2rcpNz2xc6VniDUHC2uMmmf3n0mCK2S8D2iRhuxhhcl9DYFAtbZWuWtQu8IUF1I-rTzMgFqY0RgRyoa4GRwIpcogN2IfeUiGT6kI3eSdIvB7ELtPHgERt_Y1R8POJcNIktA'

    constructor(props) {
      super(props);
      
      this.state = {
        accounts: [] as Accounts[]
      }
    }

    componentDidMount() {
      this.getAccounts().then((res) => {          
          if(res?.data) {
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
              'Authorization': this.accessToken
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
                            <Card key={'card' + index} containerStyle={{ height: 200, borderRadius:20}} >
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    {/* <View style={{ height: 50, width: '20%', marginTop: 10}}>
                                        <Image
                                            style={{ width: 50, height: 50 }}
                                            resizeMode="center"
                                            source={{ uri: item.avatar }}
                                        />
                                    </View> */}
                                    <View style={{ height: 50, width: '60%'}}>
                                        <Text style={styles.boldTextCenter}>{item.accountName}</Text>
                                    </View>
                                </View>
                                <Card.Divider style={{marginTop:70}}/>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Text style={[styles.boldText, {textAlign:'left'}]}>{item.accountId}</Text>
                                    <Text style={[styles.boldText, {textAlign:'right'}]}>{item.accountNumber}</Text>
                                </View>
                                <View style={{marginTop:40, flex: 1, flexDirection: 'row' }}>
                                    <Text style={[styles.boldText, {textAlign:'left'}]}>Avalible Balance</Text>
                                    <Text style={[styles.boldText, {textAlign:'right'}]}>{item.accountAvailableBalance}</Text>
                                </View>
                            </Card>
                        );
                    })
                }
                
                <View style={{ 
                    marginLeft:10, 
                    marginTop: 15,
                    height: 70, 
                    width: '100%',
                    alignItems: 'center'}}>

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
                                height: 50}}
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
        accountAvailableBalance:'290,382.00',
        avatar: 'https://www.gamblerspick.com/uploads/monthly_2017_09/bangkokbank.png.42add7fd82ca6c9969d985a5b913ecf0.png'
    },
    {
      accountId: "I'M KING",
        accountNumber: '12-80908-2929',
        accountName: 'SAVING ACCOUNT',
        accountAvailableBalance:'10,382.00',
        avatar: 'https://102169-290234-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2015/11/icon-bank-scb.png'
    },
];
const styles = StyleSheet.create({
    boldText: {
        height: 50, 
        width: '50%' , 
        marginTop: 10, 
        fontSize:16, 
        fontWeight:'bold',
    },
    boldTextCenter: {
        fontSize:18, 
        fontWeight:'bold', 
        marginTop: 10, 
        textAlign: 'center'
    }
});
