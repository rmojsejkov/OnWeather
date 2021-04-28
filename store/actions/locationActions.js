import React from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { LOCATION } from '../../constants/types';

const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== 'granted') {
        return false;
    }
    return true;
}

export const getThisLocation = () => {
    return async dispatch => {
        const havePermission = await verifyPermissions();
        if (!havePermission) {
            throw new Error('You need to grant location permission to use this app');
        }
        try {
            const location = await Location.getCurrentPositionAsync({
                timeInterval: 5000
            });
            const {latitude, longitude} = location.coords;
            dispatch({
                type: LOCATION.GET_CURRENT_LOCATION,
                payload: {
                    lat: latitude,
                    lon: longitude
                }
            });
        }
        catch (err) {
            throw err;
        }
    }
}