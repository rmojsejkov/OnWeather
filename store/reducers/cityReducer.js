import { CITIES } from "../../constants/types";

const initialState = {
    citiesWeather: [],
    currentCityWeather: null
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
    DEFAULT: state => state
}

export const cityReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}