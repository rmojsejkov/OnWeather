import React, { useEffect } from 'react';
import {Text, View, StyleSheet, FlatList, Button, ActivityIndicator} from 'react-native';

import { CityBlockItem, InputContainer } from '../../../components';
import Colors from '../../../constants/colors';

const CityScreenView = (props) => {

    const {
        error,
        navigation,
        citiesWeather,
        isLoading,
        loadCities
    } = props;

    navigation.setOptions = () => {
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => {
                return (
                    <InputContainer />
                    // <SearchInput value={cityInputValue} onChangeText={textHandler} />
                );
            }
        });
    }, []);

    if (error) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{error}</Text>
                <View>
                    <Button title='Try again' color={Colors.black} onPress={() => loadCities()}/>
                </View>
            </View>
        )
    }

    if (isLoading) {
        return (
            <View style={{...styles.screen, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color={Colors.red} />
            </View>
        )
    }

    console.log(loadCities)
    return(
        <View style={styles.screen}>
            <FlatList
                data={citiesWeather}
                keyExtractor={item => item.id + ''}
                numColumns={2}
                renderItem={itemData => <CityBlockItem city={itemData.item} onSelect={ () => ({}) } />}
                refreshing={isLoading}
                onRefresh={() => loadCities()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.white,
        flex: 1,
        paddingHorizontal: 5
    }
});

export default CityScreenView;
