import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import CityScreenView from '../screens/firstTab/CityScreen/CityScreenView';
import CityDetails from '../screens/firstTab/CityDetails/CityDetails';
import DailyScreen from '../screens/secondTab/DailyScreen';
import HourlyScreen from '../screens/thirdTab/HourlyScreen';
import Colors from '../constants/colors';


const defaultStackNavOptions = {
    headerStyle: {
        elevation: 0,
        shadowOpacity:0
    }
}

const CityStackNavigation = createStackNavigator();

const CityNavigation = () => {
    return(
        <CityStackNavigation.Navigator
            screenOptions={defaultStackNavOptions}
            >
            <CityStackNavigation.Screen
                name="CityScreen"
                component={CityScreenView}
            />
            <CityStackNavigation.Screen
                name="CityDetails"
                component={CityDetails}
            />
        </CityStackNavigation.Navigator>
    );
};

const DailyStackNavigation = createStackNavigator();

const DailyNavigation = () => {
    return(
        <DailyStackNavigation.Navigator
            screenOptions={defaultStackNavOptions}
        >
            <DailyStackNavigation.Screen
                name="Daily"
                component={DailyScreen}
            />
        </DailyStackNavigation.Navigator>
    );
};

const HourlyStackNavigation = createStackNavigator();

const HourlyNavigation = () => {
    return(
        <HourlyStackNavigation.Navigator
            screenOptions={defaultStackNavOptions}
        >
            <HourlyStackNavigation.Screen
                name="Hourly"
                component={HourlyScreen}
            />
        </HourlyStackNavigation.Navigator>
    );
};

const TabNavigator = createBottomTabNavigator();

export const MainNavigator = () => {
    return(
        <TabNavigator.Navigator
            lazy={true}
            tabBarOptions={{
                activeTintColor: Colors.red,
                inactiveTintColor: 'gray'
            }}
        >
            <TabNavigator.Screen
                name="City"
                component={CityNavigation}
                options={{
                    tabBarIcon: tabInfo => (
                        <Ionicons name='home' size={24} color={tabInfo.color}/>
                    ),
                    tabBarLabel:'City',
                }}
                // tabBarOptions={{
                //     activeTintColor: Colors.red,
                //     inactiveTintColor: 'gray'
                // }}
            />
            <TabNavigator.Screen
                name="DailyScreen"
                component={DailyNavigation}
                options={{
                    tabBarIcon: tabInfo => (
                        <Ionicons name='calendar' size={24} color={tabInfo.color} />
                    ),
                    tabBarLabel:'Daily'
                }}
            />
            <TabNavigator.Screen
                name="HourlyScreen"
                component={HourlyNavigation}
                options={{
                    tabBarIcon: tabInfo => (
                        <Ionicons name='time' size={24} color={tabInfo.color} />
                    ),
                    tabBarLabel:'Hourly'
                }}
            />
        </TabNavigator.Navigator>
    );
};