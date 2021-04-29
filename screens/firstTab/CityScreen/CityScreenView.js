import React, { useEffect } from 'react';
import {Text, View, StyleSheet, FlatList, Button, ActivityIndicator} from 'react-native';

import { CityBlockItem, InputContainer } from '../../../components';
import Colors from '../../../constants/colors';
import { Icon } from "react-native-elements";

const CityScreenView = (props) => {

    const {
        error,
        navigation,
        citiesWeather,
        isLoading,
        loadCities,
        cityInputValue,
        textHandler,
        searchedCity,
        fetchCityWeatherByName,
        isSearching
    } = props;

    navigation.setOptions = () => {
    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => {
                return (
                    <InputContainer value={cityInputValue}  onChangeText={textHandler} />
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

    if (isSearching && cityInputValue.trim().length > 3) {
        if (searchedCity.length === 0) {
            return (
                <View style={styles.notFoundScreen}>
                    <View style={styles.imgContainer}>
                        <Icon name="md-sad-outline" color={Colors.gray} size={50}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.notFoundText} >No data for "{cityInputValue}"</Text>
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.screen}>
                <View style={styles.headSearch}>
                    <Text style={styles.headSearchText}>SEARCH RESULTS</Text>
                </View>
                <View>
                    <FlatList
                        data={searchedCity}
                        keyExtractor={item => item.id + ''}
                        renderItem={itemData => <CitySearchItem city={itemData.item} onSelect={onSelectCityHandler.bind(this)} />}
                        refreshing={isLoading}
                        onRefresh={() => fetchCityWeatherByName(cityInputValue)}
                    />
                </View>
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
    headSearch: {
        padding: 10
    },
    headSearchText: {
        fontWeight: 'bold'
    },
    screen: {
        backgroundColor: Colors.white,
        flex: 1,
        paddingHorizontal: 5
    }
});

export default CityScreenView;
