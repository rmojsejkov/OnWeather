import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as FileSystem from 'expo-file-system';


import { convertDateFromUTC, dayFormatter, MONTHS } from "../../constants/utils";
import { cityActions, locationActions } from "../../store/actions";
import HourlyScreen from "./HourlyScreen";


const HourlyScreenContainer = ({ navigation, route, ...props }) => {

    const [isLoading, setIsLoading] = useState(false);
    const thisLocation = useSelector(state => state.location.thisLocation);
    const currentCityWeather = useSelector(state => state.city.currentCityWeather);
    const dispatch = useDispatch();

    const allowHandler = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(locationActions.getThisLocation());
            await loadWeather();
        } catch (err) {
            Alert.alert('Error', err.message, [{ text: 'Okay' }]);
        }
        setIsLoading(false);
    }, [dispatch, thisLocation]);

    const loadWeather = useCallback(async () => {
        setIsLoading(true);
        try {
            if (!thisLocation) {
                await dispatch(locationActions.getThisLocation());
            }
            await dispatch(cityActions.getThisCityWeather());
        } catch (err) {
            console.log(err.message);
        }
        setIsLoading(false);
    }, [isLoading, currentCityWeather]);

    useEffect(() => {
        if (!currentCityWeather) {
            loadWeather();
            return;
        }
        const getDate = () => {
            return convertDateFromUTC(currentCityWeather.hourly[0].dt)
        };
        const title = `${currentCityWeather.city} - ${MONTHS[getDate().getMonth()]}, ${dayFormatter(getDate().getDate())}`;
        navigation.setOptions({
            headerTitle: currentCityWeather ? title : '',
            headerTitleStyle: {
                fontSize: 28
            }
        });
    }, [currentCityWeather]);

    useEffect(() => {
        let unsubscribeTabPress;
        const unsubscribeBlur = navigation
            .addListener('blur', () => {
                if (unsubscribeTabPress) {
                    unsubscribeTabPress();
                }
            });
        const unsubscribeFocusTopTab = navigation
            .addListener('focus', () => {
                loadWeather();

            });
        const unsubscribeFocus = navigation.dangerouslyGetParent()
            .addListener('focus', () => {
                unsubscribeTabPress = navigation.dangerouslyGetParent()
                    .addListener('tabPress', e => {
                        loadWeather();
                    });
            });
        return () => {
            unsubscribeBlur();
            unsubscribeFocus();
            unsubscribeFocusTopTab();
        }
    }, [navigation]);

    return (
        <HourlyScreen
            isLoading={isLoading}
            currentCityWeather={currentCityWeather}
            thisLocation={thisLocation}
            loadWeather={loadWeather}
            allowHandler={allowHandler}
        />
    )
};

export default HourlyScreenContainer;