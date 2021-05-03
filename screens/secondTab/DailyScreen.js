import React from "react";
import { ActivityIndicator, FlatList, View, StyleSheet } from "react-native";

import { DailyBlock } from "../../components";
import AllowScreen from "../AllowScreen";
import Colors from "../../constants/colors";


const DailyScreen = ({navigation, ...props}) => {
    const {
        isLoading,
        thisLocation,
        currentCityWeather,
        allowHandler,
        loadWeather
    } = props;


    if (isLoading) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color={Colors.red} />
            </View>
        )
    }

    if (!thisLocation) {
        return (
            <AllowScreen allowHandler={allowHandler} />
        )
    }

    if (!currentCityWeather) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color={Colors.red} />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={currentCityWeather.daily}
                keyExtractor={item => item.dt + ''}
                renderItem={itemData => <DailyBlock daily={itemData.item} />}
                refreshing={isLoading}
                onRefresh={() => loadWeather()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.white
    },
    imgContainer: {
        backgroundColor: Colors.lightgray,
        padding: 40,
        borderRadius: 80,
        marginBottom: 50
    },
    notFoundText: {
        fontSize: 20,
        fontWeight: 'bold'
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
        backgroundColor: Colors.black,
        borderRadius: 8,
        overflow: 'hidden',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20
    },
    accessButtonText: {
        color: Colors.white,
    }
});

export default DailyScreen;