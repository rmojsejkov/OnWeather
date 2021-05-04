import { CITIES } from "../../constants/types";

const initialState = {
    citiesWeather: [],
    currentCityWeather: null,
    searchedCity: [],
    thisCityWeatherYesterday: null

}


const handlers = {
    [CITIES.SET_CITIES_WEATHER]: (state, {payload}) => ({
        ...state,
        citiesWeather: payload
    }),
    [CITIES.SET_CURRENT_CITY_WEATHER]: (state, {payload}) => ({
        ...state,
        currentCityWeather: payload
    }),
    [CITIES.GET_CITIES_WEATHER_BY_NAME]: (state, {payload}) => ({
        ...state,
        searchedCity: payload
    }),
    [CITIES.SET_WEATHER_YESTERDAY]: (state, {payload}) => ({
        ...state,
        thisCityWeatherYesterday: {
            ...state.currentCityWeather,
            hourly: payload
        }
    }),
    DEFAULT: state => state
}

export const cityReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}