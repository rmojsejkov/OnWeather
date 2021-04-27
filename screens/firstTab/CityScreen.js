import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import InputContainer from '../../components/InputContainer';
import CityBlockItem from '../../components/CityBlockItem';
import Colors from '../../constants/colors';

const CityScreen = (props) => {

    const {navigation} = props;

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

    return(
        <View style={styles.screen}>
            <FlatList
                // data={citiesWeather}
                keyExtractor={item => item.id + ''}
                numColumns={2}
                renderItem={itemData => <CityBlockItem city={itemData.item} onSelect={props} />}
                // refreshing={isLoading}
                // onRefresh={() => loadCities()}
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

export default CityScreen;
