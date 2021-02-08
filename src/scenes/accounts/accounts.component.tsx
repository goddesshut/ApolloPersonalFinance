import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

export class Accounts extends React.Component{
    render() {
        return (
            <SafeAreaView style={{}}>
                <Header
                    leftComponent={{}}
                    centerComponent={{ text: 'Accounts', style: { color: '#fff', fontSize: 20} }}
                    rightComponent={{}}
                    containerStyle={{
                        backgroundColor: '#4caf50',
                        justifyContent: 'space-around',
                      }}
                />
            </SafeAreaView>
               
        )
    } 
}

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
        marginTop:20,
    },
    headerText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    }
});
