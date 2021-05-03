import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import {CityWeatherIcon} from '../../../components/ui';
import { MONTHS, toTempFormatter, toTimeFormat} from "../../../constants/utils";
import Colors from '../../../constants/colors';

const CityDetails = ({navigation, ...props}) => {
    const { weatherIcon, cityWeather, cityTemp, date } = props;

    return(
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{MONTHS[date.getMonth()]}, {date.getDate()}st</Text>
                    <Text style={styles.titleText}>{toTimeFormat(date.getHours(), date.getMinutes())}</Text>
                </View>
                <View style={styles.weatherContainer}>
                    <CityWeatherIcon iconName={weatherIcon} size={130} />
                    <View style={styles.weather}>
                        <Text style={styles.weatherText}>{cityWeather}</Text>
                        <Text style={styles.weatherText}>{toTempFormatter(cityTemp)} С</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.white,
        flex: 1
    },
    container: {
        alignItems: 'center',
        padding: '35%'
    },
    weatherText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    weatherContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        padding: 10,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 19,
        fontWeight: 'bold'
    }
});

export default CityDetails;