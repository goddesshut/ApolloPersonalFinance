import React from "react";
import { StyleSheet, Text, View, ViewBase } from "react-native";
import { Card, Header, Image, Icon, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

export class Accounts extends React.Component {

    render() {
        return (
            <SafeAreaView>
                <Header
                    centerComponent={{ text: 'Accounts', style: { color: '#fff', fontSize: 20 } }}
                    containerStyle={{
                        backgroundColor: '#4caf50',
                        justifyContent: 'space-around',
                    }}
                />
                {
                    card.map((u, i) => {
                        return (
                            <Card key={'card' + i} containerStyle={{ height: 200, borderRadius:20}} >
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ height: 50, width: '20%', marginTop: 10}}>
                                        <Image
                                            style={{ width: 50, height: 50 }}
                                            resizeMode="center"
                                            source={{ uri: u.avatar }}
                                        />
                                    </View>
                                    <View style={{ height: 50, width: '60%'}}>
                                        <Text style={styles.boldTextCenter}>{u.name}</Text>
                                    </View>
                                </View>
                                <Card.Divider style={{marginTop:70}}/>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Text style={[styles.boldText, {textAlign:'left'}]}>{u.accountType}</Text>
                                    <Text style={[styles.boldText, {textAlign:'right'}]}>{u.accountNumber}</Text>
                                </View>
                                <View style={{marginTop:40, flex: 1, flexDirection: 'row' }}>
                                    <Text style={[styles.boldText, {textAlign:'left'}]}>Avalible Balance</Text>
                                    <Text style={[styles.boldText, {textAlign:'right'}]}>{u.amount}</Text>
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
