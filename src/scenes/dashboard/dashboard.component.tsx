import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pie from 'react-native-pie';

export class DashBoardScreen extends React.Component {

    render() {
        //const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Hellp Apollo!!</Text>
                <Pie
                    radius={80}
                    sections={[
                        {
                        percentage: 10,
                        color: '#C70039',
                        },
                        {
                        percentage: 20,
                        color: '#44CD40',
                        },
                        {
                        percentage: 30,
                        color: '#404FCD',
                        },
                        {
                        percentage: 40,
                        color: '#EBD22F',
                        },
                    ]}
                    strokeCap={'butt'}
                />

            </SafeAreaView>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
});
