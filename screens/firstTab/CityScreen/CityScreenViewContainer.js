import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { cityActions, locationActions } from '../../../store/actions';
import CityScreenView from './CityScreenView';

const CityScreenContainer = ({navigation, ...props}) => {
    const {
        citiesWeather,
        searchedCity
    } = useSelector(state => state.city);

    const thisLocation = useSelector(state => state.location.thisLocation);

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ isSearching, setIsSearching ] = useState(false);
    const [ cityInputValue, setCityInputValue ] = useState('');

    let timeoutId;
    const dispatch = useDispatch();

    const fetchCityWeatherByName = useCallback(async (text) => {
        setIsSearching(true);
        setIsLoading(true);
        try {
            await dispatch(cityActions.getCityWeatherByName(text));
        } catch (err) {
            Alert.alert('Error', err.message, [{ message: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
    }, [timeoutId, isLoading, setError]);

    const textHandler = text => {
        setCityInputValue(text);
        if (text.trim() !== '' && text.length > 3) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                fetchCityWeatherByName(text);
            }, 500);
            return;
        }
        setIsSearching(false);
    };

    const loadCities = useCallback(async () => {
        setIsLoading(true);
        try {
            if (!thisLocation) {
                try {
                    await dispatch(locationActions.getThisLocation());
                } catch (err) {
                    console.log(err.message);
                }
            }
            await dispatch(cityActions.getCityInCircleWeather(8));
        } catch (err) {
            Alert.alert('Error', err.message, [{ text: 'Okay' }]);
            setError('Something went wrong during network call');
        }
        setIsLoading(false);
    }, [dispatch, setIsLoading]);


    useEffect(() => {
        loadCities();
    }, [loadCities]);

    useEffect(() => {
        return navigation.dangerouslyGetParent()
            .addListener('focus', () => {
                loadCities();
            });
    }, [navigation]);

    return (
        <CityScreenView
            error={error}
            loadCities={loadCities}
            isLoading={isLoading}
            navigation={navigation}
            citiesWeather={citiesWeather}
            textHandler={textHandler}
            searchedCity={searchedCity}
            fetchCityWeatherByName={fetchCityWeatherByName}
            cityInputValue={cityInputValue}
            isSearching={isSearching}

        />
    )
}

export default CityScreenContainer;