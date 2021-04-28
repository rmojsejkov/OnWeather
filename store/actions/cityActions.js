import { CITIES } from "../../constants/types";
import { URL, APPID } from "../../constants";
import { DEFAULT_CITIES} from "../../data/cityData";

export const clearCity = () => {
    return {
        type: CITIES.SET_CITIES_WEATHER,
        payload: []
    }
}

export const getDefaultCity = () => {
    return async dispatch => {
        const city = [];
        for (const city of DEFAULT_CITIES) {
            const response = await fetch(`${URL}/weather?id=${city.id}$appid=${APPID}`);
            const fetchCity = await response.json();
            city.push(fetchCity);
            //Need to search there...
        }
        dispatch({
            type: CITIES.SET_CITIES_WEATHER,
            payload: city
        });
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
    }
};
