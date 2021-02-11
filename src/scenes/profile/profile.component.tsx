import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Badge, Icon, ListItem } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

export class ProfileScreen extends React.Component {

    state = { easterEgg1: false, easterEgg2: false}

    constructor(props) {
        super(props);
    }

    private showEasterEgg1() {
        this.setState({ easterEgg1: true })

        setTimeout(() => {
            this.setState({ easterEgg1: false })

        }, 5000)
    }

    render() {
        return (
            <SafeAreaView>
                <ListItem bottomDivider>
                    <Icon name='settings' style={styles.icon} />
                    <ListItem.Content>
                        <ListItem.Title>Profile Setting</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider>
                    <Icon name='account-balance-wallet' style={styles.icon} />
                    <ListItem.Content>
                        <ListItem.Title>Saving</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem bottomDivider>
                    <View style={styles.icon}>
                        <Icon name='notifications' />
                        <Badge
                            value={3}
                            status="warning"
                            containerStyle={{ position: 'absolute', top: -10, right: -15 }}
                        />
                    </View>
                    <ListItem.Content>
                        <ListItem.Title>Notification</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem onPress={() => this.showEasterEgg1()}>
                    <Icon name='logout' style={styles.icon} />
                    <ListItem.Content>
                        <ListItem.Title>Logout</ListItem.Title>
                    </ListItem.Content>
                </ListItem>


                

                {
                    this.state.easterEgg1 ?
                        (<View style={styles.container}>
                            <Image source={require('../../resource/Kipper.gif')} style={{width: 300, height: 300}} />
                        </View>) : null
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});
