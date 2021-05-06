import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

import Colors from '../constants/colors';

const CustomButtonWeather = (buttonSheet, ...props) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={() => (buttonSheet)}>
                <Icon
                    name="save"
                    size={70}
                    color={Colors.white}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: 85,
        width: 85,
        backgroundColor: Colors.red,
        right: '4%',
        bottom: '10%',
        borderRadius: 50
    }
});

export default CustomButtonWeather;