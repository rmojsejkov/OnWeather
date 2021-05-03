import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableWithoutFeedback } from "react-native";
import { Icon } from "react-native-elements";

import Colors from '../constants/colors';

const InputContainer = ({value, onChangeText = () => '', ...props}) => {
    const [enteredCity, setEnteredCity] = useState(value || '');

    const cityInputHandler = enteredText => {
        setEnteredCity(enteredText);
    };

    useEffect(() => {
        onChangeText(enteredCity);
    }, [enteredCity]);
    console.log(value)

    return(
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
                <TouchableWithoutFeedback onPress={() => cityInputHandler('')}>
                    <Icon
                        style={{opacity: enteredCity !== '' ? 1 : 0}}
                        name='cancel'
                        size={20}
                        color={Colors.black}
                    />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: Colors.whitesmoke,
        borderWidth: 1,
        padding: 0.1,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    input: {
        width: '90%',
        padding: 10
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

export default InputContainer;