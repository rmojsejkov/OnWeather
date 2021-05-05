import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { cityActions, locationActions } from "../../store/actions";
import DailyScreen from "./DailyScreen";


const DailyScreenContainer = ({ navigation, ...props }) => {
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
        }
        navigation.setOptions({
            headerTitle: currentCityWeather ? currentCityWeather.city : '',
            headerTitleStyle: {
                fontSize: 28
            },
        });
    }, [currentCityWeather]);

    useEffect(() => {
        let unsubscribeTabPress;
        const unsubscribeBlur = navigation.dangerouslyGetParent()
            .addListener('blur', () => {
                if (unsubscribeTabPress) {
                    unsubscribeTabPress();
                }
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
        }
    }, [navigation]);


    return (
        <DailyScreen
            isLoading={isLoading}
            thisLocation={thisLocation}
            currentCityWeather={currentCityWeather}
            allowHandler={allowHandler}
            loadWeather={loadWeather}
        />
    )
};

export default DailyScreenContainer;