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
        // headerTitle: '',
        elevation: 0,
        shadowOpacity: 0
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

const HourlyStackNavigator = () => {

    return(
        <HourlyStackNavigation.Navigator
            screenOptions={defaultStackNavOptions}
            style={{
                backgroundColor: 'white',
                elevation: 0,
                shadowWidth: 0

            }}
            tabBarOptions={{
                // activeTintColor: Colors.black,
                // inactiveTintColor: 'gray',
                style: {
                    width: '60%',
                    alignSelf: 'center',
                    elevation: 0
                }
            }}
        >
            <HourlyStackNavigation.Screen
                name="Today"
                component={HourlyToday}
            />
            <HourlyStackNavigation.Screen
                name="Yesterday"
                component={HourlyYesterday}
            />
        </HourlyStackNavigation.Navigator>
    );
};

const HourlyNavigator = createStackNavigator();

const HourlyNavigation = () => {
    const styleHourly = {
        headerStyle: {
            elevation: 0,
            shadowOpacity: 1
        }
    }
    return(
        <HourlyNavigator.Navigator
            screenOptions={styleHourly}
        >
            <HourlyNavigator.Screen
                name="Hourly"
                component={HourlyStackNavigator}
                options={{
                    headerTitle: ''
                }}
            />
        </HourlyNavigator.Navigator>
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