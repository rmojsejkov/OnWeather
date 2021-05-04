import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { CityScreen, CityDetails } from '../screens/firstTab'
import { DailyScreen } from '../screens/secondTab';
import {HourlyYesterday, HourlyToday} from '../screens/thirdTab/';
import Colors from '../constants/colors';


const defaultStackNavOptions = {
    headerStyle: {
        headerTitle: '',
        elevation: 0,
        shadowOpacity:1
    },
}

const CityStackNavigation = createStackNavigator();

const CityNavigation = () => {
    return(
        <CityStackNavigation.Navigator
            screenOptions={defaultStackNavOptions}
            >
            <CityStackNavigation.Screen
                name="CityScreen"
                component={CityScreen}
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

const HourlyStackNavigation = createMaterialTopTabNavigator();

const HourlyNavigation = () => {
    return(
        <HourlyStackNavigation.Navigator
            screenOptions={defaultStackNavOptions}
            
        >
            <HourlyStackNavigation.Screen
                name="HourlyToday"
                component={HourlyToday}
            />
            <HourlyStackNavigation.Screen
                name="HourlyYesterday"
                component={HourlyYesterday}
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