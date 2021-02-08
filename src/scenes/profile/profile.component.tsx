import React from "react";
import { StyleSheet, View } from "react-native";
import { Badge, Icon, ListItem } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

export class ProfileScreen extends React.Component {

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
                        <Icon name='notifications'  />
                        <Badge
                            value={3}
                            status="warning"
                            containerStyle={{ position: 'absolute',top: -10, right: -15 }}
                        />
                    </View>
                    <ListItem.Content>
                        <ListItem.Title>Notification</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem>
                    <Icon name='logout' style={styles.icon} />
                    <ListItem.Content>
                        <ListItem.Title>Logout</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </SafeAreaView>
        )
    }

    private goToUserSetting() {

    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20
    }
});
