import { CITIES } from "../../constants/types";
import { URL, APPID } from "../../constants";
import { DEFAULT_CITIES } from "../../data/cityData";

export const clearCity = () => {
    return {
        type: CITIES.SET_CITIES_WEATHER,
        payload: []
    }
}

export const getDefaultCity = () => {
    return async dispatch => {
        const cities = [];
        for (const city of DEFAULT_CITIES) {
            const response = await fetch(`${URL}/weather?id=${city.id}&appid=${APPID}`);
            const fetchCity = await response.json();
            cities.push(fetchCity);
        }
        dispatch({
            type: CITIES.SET_CITIES_WEATHER,
            payload: cities
        });
    }
}

export const getThisCityWeather = () => {
    return async (dispatch, getState) => {
        const { thisLocation } = getState().location;
        let response = await fetch(`${URL}/weather?lat=${thisLocation.lat}&lon=${thisLocation.lon}&appid=${APPID}`);
        if (!response.ok) {
            throw new Error("Can't find city on this location.");
        }
        const city = await response.json();
        const thisCityDaily = {
            id: city.id,
            city: city.name
        }
        response = await fetch(`${URL}/onecall?lat=${thisLocation.lat}&lon=${thisLocation.lon}&exclude=current,minutely,alerts&appid=${APPID}`);
        if (!response.ok) {
            throw new Error("Can't fetch data on this location.");
        }
        const { daily, hourly } = await response.json();
        dispatch({
            type: CITIES.SET_CURRENT_CITY_WEATHER,
            payload: {
                ...thisCityDaily,
                daily,
                hourly
            }
        })
    }
}

export const getCityInCircleWeather = cityCount => {
    return async (dispatch, getState) => {
        dispatch(clearCity());
        const { thisLocation } = getState().location;
        if (!thisLocation) {
            await dispatch(getDefaultCity());
            return;
        }
        const response = await fetch(`${URL}/find?lat=${thisLocation.lat}&lon=${thisLocation.lon}&cnt=${cityCount}&appid=${APPID}`);
        if (!response.ok) {
            throw new Error("Can't fetch cities in circle");
        }

        const city = await response.json();
        dispatch({
            type: CITIES.SET_CITIES_WEATHER,
            payload: city.list
        });
        console.log(city.list);
    }
};

export const getCityWeatherByName = cityName => {
    return async dispatch => {
        const response = await fetch(`${URL}/find?q=${cityName}&appid=${APPID}`);
        if (!response.ok) {
            throw new Error("Can't fetch cities by name");
        }
        const city = await response.json();
        dispatch({
            type: CITIES.GET_CITIES_WEATHER_BY_NAME,
            payload: city.list
        });
    }
}
