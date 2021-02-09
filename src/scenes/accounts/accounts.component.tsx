import React from "react";
import { StyleSheet, Text, View, ViewBase } from "react-native";
import { Card, Header, Image, Icon, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

export class Accounts extends React.Component {
    render() {
        return (
            <SafeAreaView style={{}}>
                <Header
                    leftComponent={{}}
                    centerComponent={{ text: 'Accounts', style: { color: '#fff', fontSize: 20 } }}
                    rightComponent={{}}
                    containerStyle={{
                        backgroundColor: '#4caf50',
                        justifyContent: 'space-around',
                    }}
                />
                {
                    card.map((u, i) => {
                        return (
                            <>
                                <Card key={i} containerStyle={{ height: 180 }}>
                                    <View key={i} style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ height: 50, width: 100, marginTop: 10, borderWidth: 0 }}>
                                            <Image
                                                style={{ width: 50, height: 50 }}
                                                resizeMode="center"
                                                source={{ uri: u.avatar }}
                                            />
                                        </View>
                                        <View style={{ height: 50, width: 250, borderWidth: 0 }}>
                                            <Text style={{ marginTop: 10, textAlign: 'right' }}>{u.name} - {u.accountType}</Text>
                                            <Text style={{ marginTop: 5, textAlign: 'right' }}>{u.accountNumber}</Text>
                                        </View>
                                    </View>
                                    <Card.Divider style={{marginTop:70}}/>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ height: 50, width: 150, marginTop: 10, borderWidth: 0 }}>
                                            <Text style={{fontSize:18, fontWeight:'bold', textAlign: 'left' }}>Avalible Balance</Text>
                                        </View>
                                        <View style={{ height: 50, width: 200, borderWidth: 0 }}>
                                            <Text style={{fontSize:18, fontWeight:'bold', marginTop: 10, textAlign: 'right' }}>{u.amount}</Text>
                                        </View>
                                    </View>
                                </Card>
                            </>
                        );
                    })
                }
                
                <View style={{ 
                    marginLeft:15, 
                    marginTop: 15,
                    height: 70, 
                    width: 380,
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
                                height: 50}}
                        />
                </View>
            </SafeAreaView>

        )
    }
}
const card = [
    {
        name: 'BANGKOK BANK',
        accountNumber: '12-8909-3829',
        accountType: 'DEPOSIT',
        amount:'290,382.00',
        avatar: 'https://www.gamblerspick.com/uploads/monthly_2017_09/bangkokbank.png.42add7fd82ca6c9969d985a5b913ecf0.png'
    },
    {
        name: 'KBANK',
        accountNumber: '12-80908-2929',
        accountType: 'SAVING',
        amount:'10,382.00',
        avatar: 'https://static.wikia.nocookie.net/logopedia/images/d/d3/KBank_logo.png'
    },
];
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        borderWidth: 1,
    },
    text: {
        textAlign: 'center',
    },
    headerContainer: {
        height: 50,
        borderBottomWidth: 5,
        backgroundColor: 'gray',
        marginTop: 20,
    },
    headerText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    }
});
