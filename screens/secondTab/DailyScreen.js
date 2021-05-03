import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

import { DailyItem } from "../../../components";
import AllowScreen from "../AllowScreen";
import Colors from "../../constants/colors";


const DailyScreen = ({navigation, ...props}) => {
    const {
        isLoading,
        currentLocation,
        currentCityWeather,
        allowHandler,
        loadWeather
    } = props;


    if (isLoading) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color={Colors.primary} />
            </View>
        )
    }

    if (!currentLocation) {
        return (
            <AllowScreen allowHandler={allowHandler} />
        )
    }

    if (!currentCityWeather) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color={Colors.primary} />
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={currentCityWeather.daily}
                keyExtractor={item => item.dt + ''}
                renderItem={itemData => <DailyItem daily={itemData.item} />}
                refreshing={isLoading}
                onRefresh={() => loadWeather()}
            />
        </View>
    )
};

export default DailyScreen;