import React from "react";
import { ActivityIndicator, FlatList, View, StyleSheet } from "react-native";

import { HourlyBlock } from "../../components";
import AllowScreen from "../AllowScreen";
import Colors from "../../constants/colors";
import {convertDateFromUTC} from "../../constants/utils";
import { CustomButtonWeather } from '../../components';
import ButtonSheetItem from "../../components/ButtonSheetItem";


const HourlyScreen = ({navigation, ...props}) => {
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

    const date = convertDateFromUTC(currentCityWeather.hourly[0].dt);
    const hourly = currentCityWeather.hourly.filter(hour => convertDateFromUTC(hour.dt).getDate() === date.getDate());

    return (
        <View style={styles.screen}>
            <FlatList
                data={hourly}
                keyExtractor={item => item.dt + ''}
                renderItem={itemData => <HourlyBlock hour={itemData.item} />}
                refreshing={isLoading}
                onRefresh={() => loadWeather()}
            />
            <CustomButtonWeather />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 2,
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
    },
    customButton: {
        position: 'absolute',
        overflow: 'hidden',
        width: '30%',
        backgroundColor: Colors.red

    }
});

export default HourlyScreen;