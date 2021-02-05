import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const DashBoardScreen: React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hellp Apollo!!</Text>
        </View>
    )
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
