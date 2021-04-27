import React from 'react';
import {NavigationContainer} from "@react-navigation/native";

import {Tabs} from "./Navigation";

const AppNavigator = props => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
};

export default AppNavigator;