import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { TouchableComponent } from "../components/ui";
import Colors from "../constants/colors";


const AllowScreen = ({allowHandler, ...props}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.imgContainer}>
                <Ionicons name="md-sad-outline" color={Colors.gray} size={80}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.notFoundText} >Data is not available</Text>
                <Text style={styles.messageText}>Cannot determinate your current location</Text>
            </View>
            <View style={styles.accessButton}>
                <TouchableComponent useForeground onPress={allowHandler}>
                    <View>
                        <Text style={styles.accessButtonText}>Allow access</Text>
                    </View>
                </TouchableComponent>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notFoundText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.red
    },
    textContainer: {
        padding: 10,
        justifyContent: 'space-between',
        alignItems: "center",
        height: 80,
    },
    messageText: {
        color: Colors.gray
    },
    accessButton: {
        backgroundColor: Colors.red,
        borderRadius: 20,
        overflow: 'hidden',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20
    },
    accessButtonText: {
        color: Colors.white,
    }
});

export default AllowScreen;