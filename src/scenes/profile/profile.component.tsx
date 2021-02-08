import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export class ProfileScreen extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableHighlight style={styles.touchContainer} onPress={this.goToUserSetting}>
                    <View style={styles.button}>
                        <Text>User setting</Text>
                    </View>
                </TouchableHighlight>
            </SafeAreaView>
        )
    }

    private goToUserSetting() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
    touchContainer: {
        flex: 1,
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        padding: 10
    },
});
