import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { Ionicons } from '@expo/vector-icons'
import { Icon } from 'react-native-elements'

const CityScreen = ({navigation, ...props}) => {

    const [enteredCity, setEnteredCity] = useState('');

    const cityInputHandler = enteredText => {
        setEnteredCity(enteredText);
    };

    return (
        <View style={styles.tab}>
            <View style={styles.inputContainer}>
                <Icon
                    color='gray'
                    name='search'
                    type='font-awesome'
                    size={20}
                    style={styles.icon}
                />
                <TextInput
                    placeholder="Enter city here..."
                    style={styles.input}
                    onChangeText={cityInputHandler}
                    value={enteredCity}
                />
            </View>
            <View>
                <View>
                    <Text>
                        Content
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0.3,
        borderRadius: 4,
        margin: 50,
        marginBottom: 698
    },
    input: {
        width: '90%',
        padding: 10,
        // marginBottom: 10
    },
    tab: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    icon: {
        // marginBottom: 650
    }
});

export default CityScreen;
