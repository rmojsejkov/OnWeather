import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { TouchableComponent, CityWeatherIcon } from './ui';
import { Block } from '../components';
import Colors from '../constants/colors';
import { toTempFormatter } from "../constants/utils";

const CityBlockItem = ({city, onSelect, ...props}) => {
    return(
        <Block style={styles.block}>
            <View style={styles.touchable}>
                {/*<TouchableComponent onPress={() => ({})}>*/}
                <TouchableComponent onPress={() => onSelect(city)}>
                    <View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{city.name}</Text>
                        </View>
                        <View style={styles.weatherContainer}>
                            <CityWeatherIcon iconName={city.weather[0].icon} />
                            <View style={styles.temp}>
                                <Text>{toTempFormatter(city.main.temp)} С</Text>
                            </View>
                        </View>
                    </View>
                </TouchableComponent>
            </View>
        </Block>
    );
};

const styles = StyleSheet.create({
    block: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.white,
        margin: 10,
        borderRadius: 10
    },
    weatherContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    weather: {
        paddingVertical: 5
    },
    temp: {
        paddingVertical: 5
    },
    logo: {
        width: 50,
        height: 50
    },
    title: {
        padding: 10,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    touchable: {
        overflow: 'hidden',
        borderRadius: 9
    }
});

export default CityBlockItem;