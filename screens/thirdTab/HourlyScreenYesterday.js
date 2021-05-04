import React from 'react';
import { useSelector } from 'react-redux';
import { cityActions } from '../../store/actions';

import HourlyScreenContainer from "./HourlyScreenContainer";
const HourlyScreenYesterday = props => {

    const thisCityWeatherYesterday = (useSelector(state => state.city.thisCityWeather))
    return(
        <HourlyScreenContainer
            thisCityWeather={thisCityWeatherYesterday}
            loadWeatherAction={cityActions.getThisCityWeatherYesterday()}
            {...props}
        />
    );
};

export default HourlyScreenYesterday;