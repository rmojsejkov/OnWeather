import React, { useEffect } from "react";

import { convertDateFromUTC } from "../../../constants/utils";
import CityDetails from "./CityDetails";
import Colors from '../../../constants/colors';


const CityDetailsContainer = ({ navigation, route, ...props }) => {
    const { weatherIcon, cityName, cityDt, cityWeather, cityTemp } = route.params;
    const date = convertDateFromUTC(cityDt);
    useEffect(() => {
        navigation.setOptions({
            headerTitle: cityName,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                color: Colors.red,
                fontSize: 24
            }
        })
    }, []);
    return (
        <CityDetails
            weatherIcon={weatherIcon}
            cityWeather={cityWeather}
            cityTemp={cityTemp}
            date={date}
        />
    )
};

export default CityDetailsContainer;