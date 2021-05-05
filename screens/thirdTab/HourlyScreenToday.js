import React from 'react';
import { useSelector } from 'react-redux';
import { cityActions } from '../../store/actions';

import HourlyScreenContainer from "./HourlyScreenContainer";
const HourlyScreenToday = props => {

    const thisCityWeather = (useSelector(state => state.city.currentCityWeather))
    return(
        <HourlyScreenContainer
            thisCityWeather={thisCityWeather}
            loadWeatherAction={cityActions.getThisCityWeather}
            {...props}
        />
    );
};

export default HourlyScreenToday;