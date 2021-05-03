import React, { useEffect } from "react";

import { convertDateFromUTC } from "../../../constants/utils";
import CityDetails from "./CityDetails";


const CityDetailsContainer = ({ navigation, route, ...props }) => {
    const { weatherIcon, cityName, cityDt, cityWeather, cityTemp } = route.params;
    const date = convertDateFromUTC(cityDt);
    useEffect(() => {
        navigation.setOptions({
            headerTitle: cityName,
            headerTitleAlign: 'center'
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