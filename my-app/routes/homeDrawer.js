import 'react-native-gesture-handler';

// Ignore this component Josh

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import About from "../screens/about";
import Home from '../screens/home';
// import Search from '../screens/search';
// import ReviewDetails from "../screens/reviewDetails";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeStack from './homeStack';
// import Searching from '../screens/searching';
// import Weather from '../screens/weather';
// import Weathering from '../screens/Weathering';
import Example from '../screens/exampleOne';
import TestSearch from '../screens/testSearch';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function HomeBuild() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Weather"
                options={{
                    drawerLabel: 'Weather'
                }}
                component={ Example } />
            <Drawer.Screen
                name="Geo-Search"
                options={{
                    drawerLabel: 'Geo-Search'
                }}
                component={ TestSearch } />
            {/* <Drawer.Screen
                name="Searching"
                options={{
                    drawerLabel: 'Searching'
                }}
                component={Search} /> */}
            <Drawer.Screen
                name="Homes"
                options={{
                    drawerLabel: 'Home'
                }}
                component={Home} />
            <Drawer.Screen
                name="About"
                options={{
                    drawerLabel: 'About'
                }}
                component={About} />
        </Drawer.Navigator>
    );
}

//  HomeBuild;
